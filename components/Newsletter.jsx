"use client"

const Newsletter = () => {
    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Sign up for our newsletter
                    </h2>
                    <p className="mt-3 text-xl text-gray-600 sm:mt-4">
                        Get the latest updates straight to your inbox.
                    </p>
                    <form className="mt-8 sm:flex justify-center" action="#" method="POST">
                        <div className="min-w-0 flex-1">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300 rounded-md"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                                type="submit"
                                className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
