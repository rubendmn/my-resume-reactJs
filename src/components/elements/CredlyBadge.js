
export default function CredlyBadge({width,height,imageId,imageName,badgeId,badgeName}) {
  
  return (
    <figure className="is-inline-block image">
        <a href={"https://www.credly.com/badges/" + badgeId + "/public_url"} target="_blank" rel="noopener noreferrer">
        <img src={"https://images.credly.com/size/" + width + "x" + height + "/images/" + imageId + "/" + imageName} alt={badgeName} />
      </a>
    </figure>
  );
}


