import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
<Footer container className='border border-t-8 border-teal-500'>
    <div className='w-full max-w-7xl mx-auto'>

        <div className='grid-cols-2 w-full justify-between flex'>

            <div className='mt-5'>
                <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Szymons</span>
                    Blog
                </Link>
            </div>

            <div className='mt-3'>
                <Footer.Title title='About' />
                <Footer.LinkGroup col>
                    <Footer.Link href='https://www.shhmon.com' target='_blank' rel='noopener noreferrer'> 
                        Szymons blog
                    </Footer.Link>
                    <Footer.Link href='https://www.shhmon.com' target='_blank' rel='noopener noreferrer'>
                        Shhmon.com
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>

            <div className='mt-3'>
                <Footer.Title title='Follow Us' />
                <Footer.LinkGroup col>
                    <Footer.Link href='https://www.shhmon.com' target='_blank' rel='noopener noreferrer'>
                        Github
                    </Footer.Link>
                    <Footer.Link href='https://www.shhmon.com' target='_blank' rel='noopener noreferrer'>
                        Shhmon.com
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>

            <div className='mt-3'>
                <Footer.Title title='Follow Us' />
                <Footer.LinkGroup col>
                    <Footer.Link href='https://www.shhmon.com' target='_blank' rel='noopener noreferrer'>
                        Github
                    </Footer.Link>
                    <Footer.Link href='https://www.shhmon.com' target='_blank' rel='noopener noreferrer'>
                        Shhmon.com
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>
        </div>

        <Footer.Divider />

        <div className='grid w-full sm:flex justify-center sm:justify-around'>
                <Footer.Copyright href='#' by="Szymon's blog" year={new Date().getFullYear()}/>
            <div className='flex gap-6 mt-4 sm:mt-0'>
                <Footer.Icon href='#' icon={BsFacebook} />
                <Footer.Icon href='#' icon={BsGithub} />
                <Footer.Icon href='#' icon={BsTwitter} />
                <Footer.Icon href='#' icon={BsInstagram} />
            </div>
        </div>

    
    </div>                  
</Footer>
  )
}