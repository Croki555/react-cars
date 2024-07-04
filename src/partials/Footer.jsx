function Footer() {
    return (
        <footer className="py-3">
            <div className="container-xxl border-top">
                <p className="text-center text-muted pt-3">© {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}

export { Footer }