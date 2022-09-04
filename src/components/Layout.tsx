import Navbar from './Navbar'
export default function Layout({ children }) {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <main className="container max-w-screen-xl mx-auto pb-20 px-4">
                {children}
            </main>
        </div>
    )
}
