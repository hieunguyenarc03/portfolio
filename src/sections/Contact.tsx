export const Contact = () => {
    return (
        <section id="contacts" className="bg-white">
            <div className="max-w-screen-xl mx-auto px-[50px] md:px-[100px] py-[60px] md:py-[100px]">

                {/* Header */}
                <div className="text-center mb-[40px] md:mb-[60px]">
                    <h2 className="font-semibold text-[36px] md:text-[48px] leading-tight text-black mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-[17px] md:text-[19px] leading-[27px] text-gray-600 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </div>

                {/* Contact Form */}
                <div className="max-w-2xl mx-auto">
                    <form className="flex flex-col gap-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                                placeholder="Tell me about your project..."
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-4 bg-black text-white font-medium text-base rounded-lg hover:bg-gray-800 transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};