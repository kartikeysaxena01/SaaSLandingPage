import Avatar1 from "../assets/avatar-1.png";
import Avatar2 from "../assets/avatar-2.png";
import Avatar3 from "../assets/avatar-3.png";
import Avatar4 from "../assets/avatar-4.png";
import Avatar5 from "../assets/avatar-5.png";
import Avatar6 from "../assets/avatar-6.png";

const testimonials = [
  {
    text: "This app completely transformed how I manage my daily tasks. My productivity has doubled in just a few weeks.",
    imageSrc: Avatar1,
    name: "Sarah Johnson",
    username: "@sarahj",
  },
  {
    text: "The habit tracking feature keeps me accountable every day. I haven't missed a workout in over two months.",
    imageSrc: Avatar2,
    name: "Michael Chen",
    username: "@michaelc",
  },
  {
    text: "Clean design, powerful features, and seamless performance. Exactly what I needed to stay organized.",
    imageSrc: Avatar3,
    name: "Emily Davis",
    username: "@emilyd",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me stay on top of every detail.",
    imageSrc: Avatar4,
    name: "Taylor Kim",
    username: "@taylorkim",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch. It fits perfectly into my workflow.",
    imageSrc: Avatar5,
    name: "Riley Smith",
    username: "@rileysmith",
  },
  {
    text: "Adopting this app for our team has streamlined project management and improved collaboration dramatically.",
    imageSrc: Avatar6,
    name: "Jordan Patel",
    username: "@jpateldesign",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex border border-purple-200 rounded-full px-4 py-1 text-purple-500">Testimonials</div>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">What Our Users
            <span className="text-purple-600 px-4">Say</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 font-semibold tracking-tight">
            Thousands of users trust our platform to stay productive,
            organized, and focused every day.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <p className="text-gray-700 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center mt-6 gap-4">
                <img 
                src={testimonial.imageSrc}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.username}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
