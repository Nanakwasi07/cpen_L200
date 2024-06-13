import React from 'react';

const Page = () => {
    return (
        <div className="flex bg-gray-100 min-h-screen">
            <aside className="hidden sm:flex sm:flex-col bg-gray-800">
                <a href="#" className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500">
                   
                </a>
                <div className="flex-grow flex flex-col justify-between text-gray-400">
                    <nav className="flex flex-col mx-4 my-6 space-y-4">
                        <a href="#" className="inline-flex items-center justify-center py-3 hover:text-white hover:bg-purple-600 focus:text-white focus:bg-purple-600 rounded-lg">
                            <span className="sr-only">Folders</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center py-3 text-white bg-purple-600 rounded-lg">
                            <span className="sr-only">Dashboard</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center py-3 hover:text-white hover:bg-purple-600 focus:text-white focus:bg-purple-600 rounded-lg">
                            <span className="sr-only">Messages</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center py-3 hover:text-white hover:bg-purple-600 focus:text-white focus:bg-purple-600 rounded-lg">
                            <span className="sr-only">Documents</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </nav>
                    <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
                        <button className="p-3 hover:text-white hover:bg-purple-600 focus:text-white focus:bg-purple-600 rounded-lg">
                            <span className="sr-only">Settings</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </aside>
            <div className="flex-grow text-gray-800">
                <header className="flex items-center h-20 px-6 sm:px-10 bg-white shadow">
                    <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
                        <span className="sr-only">Menu</span>
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    <div className="relative w-full max-w-md sm:-ml-2">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 20 20" stroke="currentColor" className="pointer-events-none absolute inset-y-0 left-0 w-5 h-5 ml-3 mt-2.5 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 11a5 5 0 00-10 0 5 5 0 0010 0zm-1 0h.01M11 17H6a6 6 0 010-12h.7" />
                        </svg>
                        <input type="text" role="search" placeholder="Search..." className="block w-full pl-10 pr-4 py-2 border border-transparent rounded-lg leading-5 bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-0" />
                    </div>
                    <div className="flex items-center ml-auto">
                        <button className="flex-shrink-0 p-1 mr-5 text-purple-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
                            <span className="sr-only">Notifications</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C8.67 6.165 8 7.388 8 8.756V14l-1.405 1.405A2.032 2.032 0 015 17h5m0 0a2 2 0 002 2h0a2 2 0 002-2m-4 0h4" />
                            </svg>
                        </button>
                        <button className="relative flex-shrink-0 p-1 mr-2 text-purple-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
                            <span className="sr-only">User</span>
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </button>
                    </div>
                </header>
                <main className="p-6 sm:p-10 space-y-6">
                    <h1 className="text-4xl font-semibold">Dashboard</h1>
                    <div className="flex flex-col space-y-6">
                        <section aria-labelledby="section-1-title">
                            <div className="bg-white shadow sm:rounded-lg">
                                <div className="p-6 sm:p-8">
                                    <h2 id="section-1-title" className="text-xl font-medium">Daily Notice</h2>
                                    <div className="mt-4 space-y-4">
                                        <p className="text-gray-600">Check out the latest activities happening in your school.</p>
                                        <a href="#" className="text-purple-600 hover:text-purple-500 focus:outline-none focus:underline transition ease-in-out duration-150">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section aria-labelledby="section-2-title">
                            <div className="bg-white shadow sm:rounded-lg">
                                <div className="p-6 sm:p-8">
                                    <h2 id="section-2-title" className="text-xl font-medium">Enrolled Courses</h2>
                                    <div className="mt-4 space-y-4">
                                        <p className="text-gray-600">Explore detailed statistics insights about your courses. </p>
                                        <a href="#" className="text-purple-600 hover:text-purple-500 focus:outline-none focus:underline transition ease-in-out duration-150">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section aria-labelledby="section-3-title">
                            <div className="bg-white shadow sm:rounded-lg">
                                <div className="p-6 sm:p-8">
                                    <h2 id="section-3-title" className="text-xl font-medium">Assignments</h2>
                                    <div className="mt-4 space-y-4">
                                        <p className="text-gray-600"> Get real-time updates on pending Assignments.</p>
                                        <a href="#" className="text-purple-600 hover:text-purple-500 focus:outline-none focus:underline transition ease-in-out duration-150">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Page;
