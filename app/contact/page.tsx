export default function Contact() {
    return (
        <div className="container">
            <h1>צור קשר</h1>

            <div className="card">
                📍 קניון רמות ירושלים – קומה 3<br />
                מעבר למינימול אחרי חנות החיות<br />
                ☎️ 02-6782027<br />
                📱 058-4006364<br /><br />

                🕘 א'-ה': 09:30–22:00<br />
                🕘 ו': 09:00–13:30
            </div>

            <a href="tel:026782027" className="btn">
                התקשרי עכשיו
            </a>

            <a
                href="https://wa.me/972584006364"
                className="btn"
                style={{ marginLeft: 10 }}
            >
                WhatsApp
            </a>
        </div>
    );
}