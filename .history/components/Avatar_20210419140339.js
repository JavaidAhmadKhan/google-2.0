function Avatar({ url }) {
  return (
    <img loading="lazy" className="rounded-full p-20" src={url} alt="profile pic" />
  );
}

export default Avatar;
