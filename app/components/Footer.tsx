import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" text-black py-10">
      <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-center">Capslock Software</h2>
          <p className ="text-sm text-center">
            Concept Softworks is a software company. We develop custom built software for clients - covering everything from
            financial instutions & medical companies all the way to tech companies and government organziations.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/team" className="hover:underline">Team</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="hover:underline">Services</Link>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/terms" className="hover:underline">Terms & Privacy (Product)</Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link href="/kvkk" className="hover:underline">Privacy (KVKK)</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
