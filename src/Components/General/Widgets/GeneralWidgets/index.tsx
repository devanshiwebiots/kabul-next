"use client"
import React from 'react'
import { Container, Row } from 'reactstrap'
import Marketing from './Marketing'
import CategoriesSales from './CategoriesSales'
import ProjectCreated from './ProjectCreated'
import Budget from './Budget'

const GeneralWidgetsContainer = () => {
  return (
    <Container fluid className='general-widget'>
      <Row>
        <Marketing/>
        <CategoriesSales/>
        <ProjectCreated/>
        <Budget/>
      </Row>
    </Container>
  )
}

export default GeneralWidgetsContainer
