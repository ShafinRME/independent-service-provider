import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faq.css';
import faq from '../../../images/FAQ/FAQ.jpg';
const Faq = () => {
    return (
        <div className="container faq-container">
            <div className="faq-ques-ans">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='accordion-head'>What is  the origin of Quantum Physics ?</Accordion.Header>
                        <Accordion.Body>
                            The field of quantum physics arose in the late 1800s and early 1900s from a series of experimental observations of atoms that didn't make intuitive sense in the context of classical physics. Among the basic discoveries was the realization that matter and energy can be thought of as discrete packets, or quanta, that have a minimum value associated with them. For example, light of a fixed frequency will deliver energy in quanta called "photons." Each photon at this frequency will have the same amount of energy, and this energy can't be broken down into smaller units. In fact, the word "quantum" has Latin roots and means "how much."
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is Theoretical Astrophysics means?</Accordion.Header>
                        <Accordion.Body>
                            Theoretical astrophysicists use a wide variety of tools which include analytical models (for example, polytropes to approximate the behaviors of a star) and computational numerical simulations. Each has some advantages. Analytical models of a process are generally better for giving insight into the heart of what is going on. Numerical models can reveal the existence of phenomena and effects that would otherwise not be seen.[29][30]

                            Theorists in astrophysics endeavor to create theoretical models and figure out the observational consequences of those models. This helps allow observers to look for data that can refute a model or help in choosing between several alternate or conflicting models.

                            Theorists also try to generate or modify models to take into account new data. In the case of an inconsistency, the general tendency is to try to make minimal modifications to the model to fit the data. In some cases, a large amount of inconsistent data over time may lead to total abandonment of a model.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is General Relativity in Science ?</Accordion.Header>
                        <Accordion.Body>
                            General relativity is a theory of gravitation developed by Einstein in the years 1907-1915. The development of general relativity began with the equivalence principle, under which the states of accelerated motion and being at rest in a gravitational field (for example, when standing on the surface of the Earth) are physically identical. The upshot of this is that free fall is inertial motion: an object in free fall is falling because that is how objects move when there is no force being exerted on them, instead of this being due to the force of gravity as is the case in classical mechanics. This is incompatible with classical mechanics and special relativity because in those theories inertially moving objects cannot accelerate with respect to each other, but objects in free fall do so. To resolve this difficulty Einstein first proposed that spacetime is curved. In 1915, he devised the Einstein field equations which relate the curvature of spacetime with the mass, energy, and any momentum within it.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is Big Bang Theory ?</Accordion.Header>
                        <Accordion.Body>
                            The Big Bang theory is the prevailing cosmological model explaining the existence of the observable universe from the earliest known periods through its subsequent large-scale evolution.The model describes how the universe expanded from an initial state of high density and temperature,and offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.

                            Crucially, the theory is compatible with Hubble-Lemaître law—the observation that the farther away a galaxy is, the faster it is moving away from Earth. Extrapolating this cosmic expansion backwards in time using the known laws of physics, the theory describes an increasingly concentrated cosmos preceded by a singularity in which space and time lose meaning (typically named "the Big Bang singularity").Detailed measurements of the expansion rate of the universe place the Big Bang singularity at around 13.8 billion years ago, which is thus considered the age of the universe.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="faq-pic">
                <img src={faq} alt="" />

            </div>
        </div>
    );
};

export default Faq;