import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard.jsx";
import '../index.css';

const HomePage = () => {
    return (
        <main style={{ maxWidth: '800px', margin: '3rem auto', padding: '0 1rem', fontFamily: 'Arial, sans-serif', color: '#222' }}>
            <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    Hi, I&apos;m a Software Development Student
                </h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
                    I am a South African software development student with an interest in data science, computational neuroscience, and machine learning.
                    I studied at the Deutsche Internationale Schule Johannesburg and Crimson Global Academy for secondary school, and I&apos;m looking to study in Germany for university.
                    I am currently interning at BCS Group Uganda
                </p>
            </section>

            <section style={{ textAlign: 'center' }}>
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                    <ProjectCard
                        title="Explore My Projects"
                        description="Check out my portfolio of software projects, ranging from front-end apps to machine learning experiments."
                        buttonText="View Projects"
                        location="/projects"
                    />
                </Link>
            </section>
        </main>
    );
};

export default HomePage;
