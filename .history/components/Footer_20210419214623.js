import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full">
      <div className="px-8 py-3">
        <p>India</p>
      </div>
      <div>
        <div>
          <GlobeIcon className="h-5" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
