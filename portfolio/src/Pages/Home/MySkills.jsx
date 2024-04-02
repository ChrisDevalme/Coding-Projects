import data from "../../data/index.json"

export default function MySkills() {
    return (
        <section className="skills--section">
            <div className="skills--section--container">
                <h2 className="skills--section--heading">My Skills & Tools</h2>
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skill--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            {item.toolLogo.map((item, index) => (
                                <img className="skills--section--img" key={index} src={item} />
                            ))}
                            {/* <p className="skills--section--description">{item.description.map((item, index) => (
                                <ul>
                                    <li key={index}>{item}</li>
                                </ul>
                            ))}</p> */}
                        </div>
                    </div>
                ))}
                <h2 className="skills--section--heading">Education</h2>
                <div className="portfolio--container--edu">
                {data?.education?.map((item, index) => (
                    <div key={index} className="skills--section--card--edu  ">
                        <img className="skills--section--img" key={index} src={item.src} />
                        <h2 className="skills--section--title">{item.title}</h2>
                        <h3 className="skills--section--card--content--edu">{item.degree}</h3>
                        <h3 className="skills--section--card--content--edu">{item.attendence}</h3>
                        <h3 className="skills--section--card--content--edu">{item.description}</h3>
                    </div>
                ))}
                </div>


            </div>

        </section>
    )
}