import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import { Title } from './Title'
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails ",
                info: "lorem is greatlorem is great lorem is great lorem is great lorem  "


            },
            {
                icon: <FaHiking />,
                title: "endless hiking ",
                info: "lorem is greatlorem is great lorem is great lorem is great lorem  "


            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle ",
                info: "lorem is greatlorem is great lorem is great lorem is great lorem  "


            },
            {
                icon: <FaBeer />,
                title: " strongest beer ",
                info: "lorem is greatlorem is great lorem is great lorem is great lorem  "


            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                {this.state.services.map((obj, index) => {
                    return <article key={index} className="service">
                        <span>{obj.icon}</span>
                        <h6>{obj.title}</h6>
                        <p>{obj.info}</p>
                    </article>
                })}  </div>
            </section>

        )
    }
}
