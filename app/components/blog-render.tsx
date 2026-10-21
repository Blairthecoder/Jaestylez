import { formatDate, type BlogPost, type RichNode } from '@/app/lib/blog-shared';
import { site } from '@/app/site-data';

// Post bodies come from the Wix editor; some are a single custom HTML block. Drop anything executable and
// the block's own <style> so the site's typography applies instead.
function cleanHtml(html: string): string {
  return html
    .replace(/<(script|style|iframe|object|embed)[\s\S]*?<\/\1>/gi, '')
    .replace(/\son\w+="[^"]*"/gi, '')
    .replace(/\son\w+='[^']*'/gi, '')
    .replace(/javascript:/gi, '');
}

function renderText(node: RichNode, key: number): React.ReactNode {
  let out: React.ReactNode = node.textData?.text ?? '';
  for (const d of node.textData?.decorations ?? []) {
    if (d.type === 'BOLD') out = <strong>{out}</strong>;
    else if (d.type === 'ITALIC') out = <em>{out}</em>;
    else if (d.type === 'UNDERLINE') out = <u>{out}</u>;
    else if (d.type === 'LINK' && d.linkData?.link?.url) {
      out = (
        <a href={d.linkData.link.url} target="_blank" rel="noopener noreferrer">
          {out}
        </a>
      );
    }
  }
  return <span key={key}>{out}</span>;
}

export function renderNodes(nodes: RichNode[] | undefined): React.ReactNode[] {
  return (nodes ?? []).map((node, i) => {
    const kids = () => renderNodes(node.nodes);
    switch (node.type) {
      case 'TEXT':
        return renderText(node, i);
      case 'PARAGRAPH':
        return node.nodes?.length ? <p key={i}>{kids()}</p> : null;
      case 'HEADING': {
        const level = Math.min(6, Math.max(2, node.headingData?.level ?? 2));
        const Tag = `h${level}` as 'h2';
        return <Tag key={i}>{kids()}</Tag>;
      }
      case 'BULLETED_LIST':
        return <ul key={i}>{kids()}</ul>;
      case 'ORDERED_LIST':
        return <ol key={i}>{kids()}</ol>;
      case 'LIST_ITEM':
        return <li key={i}>{kids()}</li>;
      case 'BLOCKQUOTE':
        return <blockquote key={i}>{kids()}</blockquote>;
      case 'DIVIDER':
        return <hr key={i} />;
      case 'IMAGE': {
        const id = node.imageData?.image?.src?.id;
        return id ? (
          <img key={i} src={`https://static.wixstatic.com/media/${id}`} alt={node.imageData?.altText ?? ''} loading="lazy" />
        ) : null;
      }
      case 'TABLE':
        return (
          <div key={i} className="table-responsive">
            <table className="table">
              <tbody>{kids()}</tbody>
            </table>
          </div>
        );
      case 'TABLE_ROW':
        return <tr key={i}>{kids()}</tr>;
      case 'TABLE_CELL':
        return <td key={i}>{kids()}</td>;
      case 'HTML': {
        const html = node.htmlData?.html;
        return html ? <div key={i} className="blog-html" dangerouslySetInnerHTML={{ __html: cleanHtml(html) }} /> : null;
      }
      default:
        return kids().length ? <div key={i}>{kids()}</div> : null;
    }
  });
}


export function Meta({ post }: { post: BlogPost }) {
  return (
    <ul className="blog-meta">
      <li>
        <i className="far fa-user-circle"></i> {site.owner}
      </li>
      {post.date && (
        <li>
          <i className="far fa-calendar-alt"></i> {formatDate(post.date)}
        </li>
      )}
      {post.minutes > 0 && (
        <li>
          <i className="far fa-clock"></i> {post.minutes} min read
        </li>
      )}
    </ul>
  );
}
