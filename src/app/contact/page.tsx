
export default function Contact() {
    return(
        <div className="my-50">
                    <div className="grid sm:grid-cols-2 items-center gap-14 p-8 mx-auto max-w-4xl bg-[#ddcaeb] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-black font-[sans-serif]">
                        <div>
                            <h1 className="text-3xl font-extrabold  text-fuchsia-950">Lets Talk</h1>
                            <p className="text-sm text-fuchsia-950 mt-3">
                                Have some big idea or brand to develop and need help?
                                Then reach out! I would love to hear about your project and provide help.
                                </p>
                            <div className="mt-35">
                                <h2 className="text-lg font-extrabold">Email</h2>
                                <ul className="mt-3">
                                    <li className="flex items-center">
                                        <div className="bg-[#e6e6e6cf] h-13 w-13 rounded-full flex items-center justify-center shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill='#9900ff' 
                                                viewBox="0 0 479.058 479.058">
                                                <path
                                                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                                    data-original="#000000" />
                                            </svg>
                                        </div>
                                        <a target="Contact@levischechtmann.com" href="#" className="text-[#9900ff] text-sm ml-3">
                                            <small className="block">Mail</small>
                                            <strong>Contact@levischechtmann.com</strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12">
                                <h2 className="text-lg font-extrabold">Socials</h2>
                                <ul className="flex mt-3 space-x-4">
                                <li className="bg-[#e6e6e6cf] h-15 w-15 rounded-full flex items-center justify-center shrink-0">
                                        <a href="https://www.youtube.com/@Levi.Schechtmann" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill='#9900ff'>
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                                        </a>
                                    </li>
                                    <li className="bg-[#e6e6e6cf] h-15 w-15 rounded-full flex items-center justify-center shrink-0">
                                        <a href="https://music.apple.com/de/artist/levi-sct/1457990370" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#9900ff" viewBox="0 0 16 16"> 
                                        <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/> <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/> <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/> </svg>                                        </a>
                                    </li>
                                    <li className="bg-[#e6e6e6cf] h-15 w-15 rounded-full flex items-center justify-center shrink-0">
                                        <a href="https://open.spotify.com/artist/3M5OFl0jQm9m58mfbdprae" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill='#9900ff' viewBox="0 0 511 512" >
                                                <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="bg-[#e6e6e6cf] h-15 w-15 rounded-full flex items-center justify-center shrink-0">
                                        <a href="https://www.instagram.com/levi.sct/" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill='#9900ff'
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                                                </path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="bg-[#e6e6e6cf] h-15 w-15 rounded-full flex items-center justify-center shrink-0">
                                        <a href="https://www.instagram.com/levi.sct/" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill='#9900ff'
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                                                </path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    
                        <form className="ml-auo space-y-4">
                            <input type='text' placeholder='Name'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#9900ff]" />
                            <input type='email' placeholder='Email'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#9900ff]" />
                            <input type='email' placeholder='Phone'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#9900ff]" />
                            <input type='text' placeholder='Subject'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#9900ff]" />
                            <textarea placeholder='Message' rows={10}
                                className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#9900ff]"></textarea>
                            <button type='button'
                                className="text-white bg-[#9900ff]  hover:bg-indigo-700 transition-colors font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
                        </form>
                    </div>
                </div>
            )
}