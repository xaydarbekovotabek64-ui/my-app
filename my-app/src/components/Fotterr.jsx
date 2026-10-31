const Fotterr = () => {
  return (
    <footer className="mt-12 bg-gray-900 px-6 py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-xl font-bold">Exclusive</h2>
          <p className="mt-3 text-sm text-gray-300">
            Your favorite products, all in one place.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Support</h3>
          <p className="mt-3 text-sm text-gray-300">123 Main Street</p>
          <p className="mt-2 text-sm text-gray-300">support@example.com</p>
          <p className="mt-2 text-sm text-gray-300">0123456789</p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li><a className="hover:text-white" href="#">About</a></li>
            <li><a className="hover:text-white" href="#">Contact</a></li>
            <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Customer Service</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li><a className="hover:text-white" href="#">Help Center</a></li>
            <li><a className="hover:text-white" href="#">Returns</a></li>
            <li><a className="hover:text-white" href="#">Terms &amp; Conditions</a></li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
        © Exclusive. All rights reserved.
      </p>
    </footer>
  );
};

export default Fotterr;
