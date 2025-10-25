import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-background text-secondary font-body">
      <Head>
        <title>Smiles in Stain - Bringing Joy Through Mehndi</title>
        <meta name="description" content="Celebrating childhood through the art of mehndi - one joyful stain at a time." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center text-center px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-heading text-primary mb-4">
              Introducing Smiles in Stain
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Where every design tells a story of strength.
            </p>
            <a
              href="#about"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-bold shadow-lg hover:bg-opacity-90 transition-all"
            >
              Find Out Who We Are
            </a>
          </div>
          {/* Optional: Add one of the henna hand graphics here */}
        </section>

        {/* Who We Are Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Placeholder for the line-art image of hands on baby feet */}
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">(Image: Hands on baby feet)</p>
              </div>
            </div>
            <div className="text-left">
              <h2 className="text-4xl font-heading text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-lg leading-relaxed">
                We're a nonprofit organization dedicated to bringing joy, comfort, and creativity to children facing medical challenges. 
              </p>
              <br/>
              <p className="text-lg leading-relaxed">
                We use the ancient art form of henna to create uplifting experiences for pediatric patients — offering a light distraction for them in difficult times.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section id="mission" className="py-20 px-4 bg-orange-100 bg-opacity-50">
          <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl font-heading text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-xl font-bold mb-4">
                Every stain tells a story. Ours is one of healing, hope, and heart.
              </p>
              <p className="text-lg leading-relaxed">
                Follow us as we bring smiles to little warriors — one design, one visit, and one stain at a time.
              </p>
            </div>
            <div>
              {/* Placeholder for the elephant line art */}
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">(Image: Elephant line art)</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Get Involved Section */}
        <section id="get-involved" className="py-20 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-heading text-primary mb-12">
              Get Involved
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: Volunteer */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-heading text-primary mb-4">Volunteer</h3>
                <p className="mb-6">Join our team of artists and help bring smiles directly to children and their families.</p>
                <a href="#contact" className="font-bold text-primary hover:underline">Apply to be an Artist</a>
              </div>
              {/* Card 2: Partner */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-heading text-primary mb-4">Partner</h3>
                <p className="mb-6">We team up with hospitals, clinics, and pediatric centers. Let's work together.</p>
                <a href="#contact" className="font-bold text-primary hover:underline">Partner With Us</a>
              </div>
              {/* Card 3: Donate */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-heading text-primary mb-4">Donate</h3>
                <p className="mb-6">Your contribution funds our supplies and helps us reach more "little warriors".</p>
                <a href="#contact" className="font-bold text-primary hover:underline">Make a Donation</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-orange-100 bg-opacity-50">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-heading text-primary mb-8">
              Join Our Journey
            </h2>
            <p className="text-lg mb-8">
              Follow us on social media to see our story unfold, or send us a message to get in touch.
            </p>
            {/* Simple Contact Form */}
            <form className="text-left space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-1">Name</label>
                <input type="text" id="name" className="w-full p-3 rounded-lg border border-gray-300" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-1">Email</label>
                <input type="email" id="email" className="w-full p-3 rounded-lg border border-gray-300" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-1">Message</label>
                <textarea id="message" rows={5} className="w-full p-3 rounded-lg border border-gray-300"></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-bold shadow-lg hover:bg-opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

