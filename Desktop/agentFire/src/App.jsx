const App = () => {
    return (
        <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', padding: '20px' }}>
            {/* Κεντρική Εικόνα / Hero Section */}
            <header
                style={{
                    background: 'linear-gradient(to right, #38b2ac, #4299e1)',
                    color: 'white',
                    textAlign: 'center',
                    padding: '40px 20px',
                }}
            >
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1
                        style={{
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                        }}
                    >
                        Καλώς ήρθατε στο [Όνομα Δωματίου]
                    </h1>
                    <p
                        style={{
                            fontSize: '1.25rem',
                            marginBottom: '30px',
                        }}
                    >
                        Ο ιδανικός χώρος για τις διακοπές σας στην [Όνομα Περιοχής].
                    </p>
                    <a href="#kratisi">
                        <button
                            style={{
                                backgroundColor: '#ecc94b',
                                color: '#1a202c',
                                fontWeight: 'bold',
                                padding: '15px 30px',
                                borderRadius: '9999px',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#d69e2e')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#ecc94b')}
                        >
                            Κάντε Κράτηση Τώρα
                        </button>
                    </a>
                </div>
            </header>

            {/* Πληροφορίες Δωματίου */}
            <section style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#2d3748' }}>
                        Πληροφορίες Δωματίου
                    </h2>
                    <p style={{ fontSize: '1rem', marginBottom: '20px', color: '#4a5568' }}>
                        Το δωμάτιο [Όνομα Δωματίου] είναι ένας άνετος και πλήρως εξοπλισμένος χώρος, ιδανικός για [Αριθμός] άτομα.
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#4a5568' }}>
                        <li>Εμβαδόν: [Εμβαδόν] τ.μ.</li>
                        <li>Κρεβάτια: [Αριθμός] x [Τύπος κρεβατιού]</li>
                        <li>Παροχές: Κλιματισμός, Wi-Fi, Τηλεόραση, Ψυγείο</li>
                        <li>Μπάνιο: [Περιγραφή μπάνιου]</li>
                    </ul>
                </div>
            </section>

            {/* Τιμές και Διαθεσιμότητα */}
            <section style={{ padding: '40px 20px', backgroundColor: '#f7fafc' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#2d3748' }}>
                        Τιμές και Διαθεσιμότητα
                    </h2>
                    <p style={{ fontSize: '1rem', marginBottom: '20px', color: '#4a5568' }}>
                        Οι τιμές κυμαίνονται ανάλογα με την περίοδο και τη διαθεσιμότητα. Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες.
                    </p>
                </div>
            </section>

            {/* Φόρμα Κράτησης */}
            <section style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#2d3748' }}>
                        Φόρμα Κράτησης
                    </h2>
                    <form>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#4a5568' }}>Όνομα</label>
                            <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e0', borderRadius: '5px' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#4a5568' }}>Email</label>
                            <input type="email" style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e0', borderRadius: '5px' }} />
                        </div>
                        <button type="submit" style={{ backgroundColor: '#4299e1', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                            Υποβολή
                        </button>
                    </form>
                </div>
            </section>

            {/* Τοποθεσία */}
            <section style={{ padding: '40px 20px', backgroundColor: '#f7fafc' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#2d3748' }}>
                        Τοποθεσία
                    </h2>
                    <p style={{ fontSize: '1rem', marginBottom: '20px', color: '#4a5568' }}>
                        Το δωμάτιο βρίσκεται στην καρδιά της [Όνομα Περιοχής], κοντά σε αξιοθέατα και εστιατόρια.
                    </p>
                </div>
            </section>

            {/* Κριτικές / Μαρτυρίες */}
            <section style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#2d3748' }}>
                        Κριτικές Επισκεπτών
                    </h2>
                    <p style={{ fontSize: '1rem', marginBottom: '20px', color: '#4a5568' }}>
                        "Είχαμε μια υπέροχη διαμονή! Το δωμάτιο ήταν άνετο και καθαρό."
                    </p>
                </div>
            </section>

            {/* Επικοινωνία */}
            <section style={{ padding: '40px 20px', backgroundColor: '#f7fafc' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#2d3748' }}>
                        Επικοινωνία
                    </h2>
                    <p style={{ fontSize: '1rem', marginBottom: '20px', color: '#4a5568' }}>
                        Τηλέφωνο: [Τηλέφωνο] | Email: [Email]
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ backgroundColor: '#2d3748', color: 'white', textAlign: 'center', padding: '20px' }}>
                <p>© [Έτος] [Όνομα Δωματίου]. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
