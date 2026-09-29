// Photos from the current site's "Jae Styles Hair Gallery" (hosted on the Wix media CDN).
export const galleryIds = [
  "9eed3b_4919f2b566d64f579ce2dd4d64af41aa~mv2.jpg",
  "9eed3b_ff6b9a90240d481b82b6f05de1c49b80~mv2.jpg",
  "9eed3b_e83bfafcbe0b40cdb9c0e0f2e02289f0~mv2.jpg",
  "9eed3b_73cb41accfd34fa4ac08c1aaa3dd062a~mv2.jpg",
  "9eed3b_a9900773a86f46ceacbc555f470d35b3~mv2.jpg",
  "9eed3b_9210c4db0c924adfa25861c8b923b510~mv2.jpg",
  "9eed3b_c49526722bb14a5481c83bcc621885bb~mv2.jpg",
  "9eed3b_1a845dced46646ed99acfccbfa4aaadd~mv2.jpg",
  "9eed3b_45278086d291410fa1b6338d258e7ce9~mv2.jpg",
  "9eed3b_8224677f78ec48d992735db10f9f3a31~mv2.jpg",
  "9eed3b_6ed826240d2743268251bea923470233~mv2.jpg",
  "9eed3b_d16a7daa441c464b85a697cbb5d6c55f~mv2.jpg",
  "9eed3b_e4ad9dd63804410092f5241ed03899ec~mv2.jpg",
  "9eed3b_8fbbaa24c978440992d1e3db4406c4bd~mv2.jpg",
  "9eed3b_47887beeffe84358a0ce03712035a553~mv2.jpg"
];

export const wixMedia = (id: string, width: number, height?: number) =>
  height
    ? `https://static.wixstatic.com/media/${id}/v1/fill/w_${width},h_${height},al_c,q_80/file.jpg`
    : `https://static.wixstatic.com/media/${id}/v1/fit/w_${width},h_${width},q_85/file.jpg`;
