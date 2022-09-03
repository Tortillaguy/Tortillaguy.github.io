import Navbar from './Navbar'
export default function Layout({ children }) {
    return (
        <main>
            <Navbar />
            <div className="container max-w-screen-xl">{children}</div>
        </main>
    )
}
