import "./Projects.css"
import React from 'react'
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";

const Projects = () => {
  return (
    <>
      <Header titulo="PROYECTOS"/>
          <section className="containerProjects">
            <div className="unispan">
              <h1 className="h1">Unispan S.A</h1>
              <h3 className="h3">Proyecto:  Asfaltado Planta Lurin, Lima</h3>
              <p className="p">Preparación, corte y perfilado del terreno, trabajos topográficos, trazo, replanteo, nivelación y compactación de subrasante, conformación de base y subbase de afirmado, y pavimentación, incluyendo maquinaria pesada y equipos livianos con sus implementos.</p>
            </div>
            <div className="scrollImg">
              <img className="imgProjects" src={'/img/Proyectos/Unispan/1.JPG'} alt="primera imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Unispan/2.JPG'} alt="segunda imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Unispan/3.JPG'} alt="tercera imagen " />
              <img className="imgProjects" src={'/img/Proyectos/Unispan/4.JPG'} alt="cuarta imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Unispan/5.JPG'} alt="quinta imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Unispan/6.JPG'} alt="sexta imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Unispan/7.JPG'} alt="septima imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Unispan/8.JPG'} alt="octava imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Unispan/9.JPG'} alt="novena imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Unispan/10.JPG'} alt="decima imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Unispan/11.JPG'} alt="decima primera imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Unispan/12.JPG'} alt="decima segunda imagen" />
            </div>
          </section>
          <section className="containerProjects">
            <div className="nanka">
              <h1 className="h1">Gastronomía Nanka Peru S.A.C.</h1>
              <h3 className="h3">Proyecto: Demolición de dos viviendas contiguas para nuevo local San Isidro</h3>
              <p className="p">Demolición total, transporte y eliminación de desmonte, remodelación, ampliación, redistribución de espacios y estructuras internas incluyendo maquinaria pesada y equipos livianos con sus implementos.</p>
            </div>
            <div className="scrollImg">
              <img className="imgProjects" src={'/img/Proyectos/Nanka/1.jpg'} alt="primera imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/2.jpg'} alt="segunda imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/3.jpg'} alt="tercera imagen " />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/4.jpg'} alt="cuarta imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/5.jpg'} alt="quinta imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/6.jpg'} alt="sexta imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/7.jpg'} alt="septima imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/8.jpg'} alt="octava imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/9.jpg'} alt="novena imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/10.jpg'} alt="decima imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/11.jpg'} alt="decimoprimera imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/12.jpg'} alt="decimosegunda imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/13.jpg'} alt="decimotercera imagen " />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/15.jpg'} alt="decimocuarta imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/16.jpg'} alt="decimoquinta imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/18.jpg'} alt="decimosexta imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/19.jpg'} alt="decimoseptima imagen" />
              <img className="imgProjects" src={'/img/Proyectos/Nanka/20.jpg'} alt="decimooctava imagen" />
            </div>
          </section>
      <Footer/>
    </>
  )
}

export default Projects

