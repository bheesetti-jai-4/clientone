function ProfileCards() {
    const cards = [
      {
        image: "/doctor.jpg",
        name: "John Doe",
        title: "Expert in cardiology with 10+ years of experience.",
      },
      {
        image: "/doctor.jpg",
        name: "Dr. Sarah Lee",
        title: "Specialist in neurology and brain research.",
      },
      {
        image: "/doctor.jpg",
        name: "Dr. Robert Smith",
        title: "Renowned orthopedic surgeon with global recognition.",
      },
      
    ];
  
    return (
      <div className=" min-h-screen flex flex-col       items-center py-10">
        <h1 className="text-4xl font-bold  mb-8">Doctors Profiles</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-11/12 max-w-5xl">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-all hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-blue-500"
              />
              <h2 className="mt-4 text-2xl font-bold text-gray-800">{item.name}</h2>
              <p className="text-center text-gray-600 mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ProfileCards;