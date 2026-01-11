export default function Profile() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Profile Page</h1>
            <p style={styles.text}>
                Welcome to your profile. This page is working correctly.
            </p>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
        fontSize: "18px"
    },
    title: {
        fontSize: "32px",
        marginBottom: "10px"
    },
    text: {
        opacity: 0.8
    }
};
