const Contact = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Contact</h2>
      <input
        type="text"
        placeholder="I want to hire Aman for a MERN project"
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none"
      />
      <div className="flex space-x-4 mt-4">
        <button className="px-6 py-3 bg-red-500 rounded-xl hover:bg-red-600">Send Message</button>
        <button className="px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700">Schedule a Call</button>
      </div>
    </div>
  );
};

export default Contact;
