import Navbar from './Navbar'
export default function Layout({ children }) {
    return (
        <div className="overflow-hidden" style={{ background: '#080a0e' }}>
            <Navbar />
            <main className="container max-w-screen-xl mx-auto pb-10 px-6">
                {children}
            </main>
        </div>
    )
}
