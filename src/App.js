import Footer from './components/footer/Footer'
import JobContent from './components/job-content/JobContent'
import JobList from './components/job-list/JobList'
import './index.css'
import 'normalize.css'

import data from './data/data.json'
import JobItem from './components/job-item/JobItem'

function App() {
    return (
        <div className="wrapper">
            <main className="main">
                <section className="job">
                    <JobContent>
                        <JobList>
                            {data.map((job) => (
                                <JobItem
                                    job={job}
                                    key={job.id}
                                />
                            ))}
                        </JobList>
                    </JobContent>
                </section>
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}

export default App
