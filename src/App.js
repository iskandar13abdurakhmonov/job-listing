import Footer from './components/footer/Footer'
import JobContent from './components/job-content/JobContent'
import JobList from './components/job-list/JobList'
import JobItem from './components/job-item/JobItem'
import './index.css'
import 'normalize.css'

import data from './assets/data.json'
import { useEffect, useState } from 'react'
import Filter from './components/filter/Filter'

function App() {
    const [jobs, setJobs] = useState([])
    const [filters, setFilters] = useState([])
    useEffect(() => {
        setJobs(data)
    }, [])

    const handleFilter = ({ role, level, tools, languages }) => {
        if (filters.length === 0) return true

        const tags = [role, level]
        if (languages) tags.push(...languages)
        if (tools) tags.push(...tools)

        return filters.every((f) => tags.includes(f))
    }

    const handleTagClick = (tag) => {
        if (filters.includes(tag)) return
        setFilters([...filters, tag])
    }

    const handleFilterClick = (passedFilter) => {
        setFilters(filters.filter((f) => f !== passedFilter))
    }

    const handleClearFilters = () => {
        setFilters([])
    }

    const filteredJobs = jobs.filter(handleFilter)

    // const filterRole = (role) => {
    //     const sortedRole = [...jobs].filter((job) => job.role === role)
    //     setJobs(sortedRole)
    //     setFilters([...[], role])
    // }

    // const filterLevel = (level) => {
    //     setJobs(jobs.filter((job) => job.level !== level))
    // }

    // const languagesFilter = (language) => {
    //     setJobs(
    //         jobs.languages.filter(
    //             (jobLanguage) => jobLanguage.language !== language
    //         )
    //     )
    // }

    // const toolsFilter = (tool) => {
    //     setJobs(jobs.tools?.filter((jobTool) => jobTool.tool !== tool))
    // }

    // const handleDeleteFilter = (filterName) => {
    //     setFilters(filters.filter((filter) => filter !== filterName))
    //     setJobs([...jobs])
    // }

    return (
        <div className="wrapper">
            <main className="main">
                <section className="job">
                    <JobContent>
                        {filters.length > 0 && (
                            <Filter
                                filters={filters}
                                onFilterClick={handleFilterClick}
                                onClearFilters={handleClearFilters}
                            />
                        )}
                        <JobList>
                            {filteredJobs.map((job) => (
                                <JobItem
                                    job={job}
                                    key={job.id}
                                    onTagClick={handleTagClick}
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
