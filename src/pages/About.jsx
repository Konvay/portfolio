import React from 'react'

import {
    Grid,
    Paper
} from '@material-ui/core'
import '../styles/About.scss'

const About = () => {
    return (
        <div class="about">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <h3>Technology</h3>
                    <ul>
                        <li>.NET / C#</li>
                        <li>Microsoft/T-SQL</li>
                        <li>Azure</li>
                        <li>Javascript</li>
                        <ul>
                            <li>React / React Native</li>
                            <li>Node</li>
                        </ul>
                        <li>Azure / AWS</li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <h3>Skills</h3>
                    <ul>
                        <li>Application Architecture</li>
                        <li>Cloud Technology / Solutions</li>
                        <ul>
                            <li>Azure</li>
                            <li>AWS</li>
                        </ul>
                        <li>Web / API Development</li>
                        <ul>
                            <li>Authentication / Authorization</li>
                            <li>RESTful</li>
                        </ul>
                        <li>Datbase Design / Development</li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    )
}

export default About