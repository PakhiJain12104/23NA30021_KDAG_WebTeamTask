import ScrollSpy from "react-ui-scrollspy";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import "./font.css";

const Course = () => {
  return (
    <section id="course">
      <div>
        <h2 color="blue">ABOUT COURSE</h2>
        <br />
        <br />
        <br />
        <Tabs
          defaultActiveKey="m1"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="m1" title="Module 1">
            <h3>DNA STRUCTURE AND FUNCTION</h3>
            <p>
              <h4>
                DNA (deoxyribonucleic acid) is a molecule that carries the
                genetic instructions essential for the development, functioning,
                growth, and reproduction of all known living organisms.
                Structurally, DNA is composed of two strands forming a double
                helix, with each strand made up of nucleotides containing a
                sugar, a phosphate group, and one of four nitrogenous bases
                (adenine, thymine, cytosine, and guanine). The specific pairing
                of these bases (A-T and C-G) enables the accurate replication of
                DNA during cell division. DNA's role is crucial in storing
                genetic information, guiding the synthesis of proteins, and
                ensuring hereditary continuity from one generation to the next.
              </h4>
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Day 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Day 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Day 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Day 4</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Day 5</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <p>
                        <h5>
                          <p style={{ textAlign: "left" }}>
                            Day 1: Introduction to DNA <br />
                            Lecture 1: Overview of DNA
                            <br />
                            Topics Covered: <br />
                            History of DNA discovery
                            <br /> Basic structure of DNA
                            <br /> Importance of DNA in biology
                            <br /> Activities:
                            <br /> Watch an introductory video on DNA discovery
                            <br /> Read textbook Chapter 1 on DNA basics <br />
                            Participate in a discussion forum about the
                            historical figures in DNA research <br />
                            <br />
                            Lecture 2: Nucleotides and Their Components <br />
                            Topics Covered:
                            <br /> Structure of nucleotides
                            <br />
                            Components: sugar, phosphate, and nitrogenous bases
                            <br />
                            Differences between DNA and RNA nucleotides
                            <br /> Activities: <br />
                            Examine molecular models of nucleotides <br />
                            Complete worksheet on identifying nucleotide
                            components <br />
                            Group discussion on the differences between DNA and
                            RNA
                          </p>
                        </h5>
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h5 style={{ textAlign: "left" }}>
                        Day 2: DNA Double Helix
                        <br />
                        Lecture 3: DNA Double Helix Structure
                        <br />
                        Topics Covered: <br /> Watson and Crick’s model
                        <br />
                        Hydrogen bonding between bases Complementary base
                        pairing
                        <br />
                        Activities: <br />
                        Build a DNA double helix model using a kit or online
                        tool
                        <br /> Review scientific papers on the discovery of the
                        double helix <br />
                        Quiz on complementary base pairing
                        <br />
                        <br />
                        Lecture 4: DNA Helix Stability and Variations
                        <br />
                        Topics Covered: <br /> Factors contributing to helix
                        stability
                        <br /> Different forms of DNA (A-DNA, B-DNA, Z-DNA){" "}
                        <br />
                        Activities: <br />
                        Watch a documentary on DNA structure variations
                        <br /> Perform an experiment to observe DNA stability
                        under different conditions <br />
                        Write a brief report on the different DNA forms
                      </h5>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h5 style={{ textAlign: "left" }}>
                        {" "}
                        Day 3: DNA Replication <br />
                        Lecture 5: Mechanism of DNA Replication <br />
                        Topics Covered: <br /> Semi-conservative replication
                        <br />
                        Role of enzymes: DNA polymerase, helicase, ligase,
                        primase
                        <br />
                        Leading and lagging strands <br /> Activities: <br />
                        Animation showing the process of DNA replication <br />{" "}
                        Label diagrams of the replication fork <br />
                        Complete a worksheet on the function of different
                        replication enzymes <br /> <br /> Lecture 6:
                        Proofreading and Error Correction <br /> Topics Covered:{" "}
                        <br /> Mechanisms of DNA proofreading <br /> Role of
                        mismatch repair system <br />
                        Importance of fidelity in DNA replication <br />{" "}
                        Activities: <br />
                        Read a case study on mutations due to replication errors{" "}
                        <br /> Participate in a class debate on the importance
                        of DNA repair mechanisms
                        <br />
                        Quiz on DNA proofreading and repair mechanisms
                      </h5>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <h5 style={{ textAlign: "left" }}>
                        Day 4: DNA Packaging <br /> Lecture 7: Chromatin
                        Structure <br /> Topics Covered: <br /> DNA packaging in
                        eukaryotes <br />
                        Structure and function of histones <br /> Nucleosome
                        formation <br /> Activities: <br />
                        Create a 3D model of a nucleosome <br />
                        Watch a video on chromatin structure <br />
                        Group activity to identify different levels of DNA
                        packaging <br /> <br />
                        Lecture 8: Higher Order DNA Structures <br /> Topics
                        Covered: <br />
                        Chromosome structure
                        <br /> Euchromatin vs. heterochromatin <br /> Functional
                        implications of DNA packaging <br />
                        Activities: <br /> Review scientific literature on
                        chromatin remodeling <br /> Diagram the different levels
                        of chromosome organization <br />
                        Discussion on the significance of chromatin structure in
                        gene regulation
                      </h5>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <h5 style={{ textAlign: "left" }}>
                        Day 5: Functions of DNA <br /> Lecture 9: DNA as Genetic
                        Material
                        <br />
                        Topics Covered: <br /> Role of DNA in heredity <br />
                        Experiments proving DNA as genetic material (Griffith,
                        Avery-MacLeod-McCarty, Hershey-Chase) <br /> Activities:{" "}
                        <br />
                        Watch a documentary on landmark experiments in DNA
                        research <br /> Write a summary of the Hershey-Chase
                        experiment <br />
                        Class discussion on the implications of DNA being the
                        genetic material
                        <br /> <br />
                        Lecture 10: DNA in Biotechnology <br />
                        Topics Covered: <br />
                        Applications of DNA in biotechnology <br />
                        Genetic engineering and CRISPR <br /> DNA sequencing
                        technologies <br /> Activities: <br />
                        Virtual lab on DNA extraction and PCR <br /> Review
                        articles on recent advances in genetic engineering{" "}
                        <br />
                        Presentation on a chosen application of DNA technology
                        in modern science
                      </h5>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Tab>
          <Tab eventKey="m2" title="Module 2">
            <h3>GENETIC VARIATION AND MUTATION</h3>
            <p>
              {" "}
              <h4>
                {" "}
                Genetic variation refers to the diversity in gene frequencies
                within a population, arising from differences in the DNA
                sequence. Mutations are changes in the DNA sequence that can
                introduce new genetic variations. These changes can occur due to
                errors during DNA replication, exposure to mutagens, or through
                recombination processes. While many mutations are neutral or
                harmful, some can confer beneficial traits that enhance an
                organism's survival and reproduction. This genetic diversity is
                fundamental to the process of evolution and natural selection,
                driving the adaptation of species to their environments.
              </h4>
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Day 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Day 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Day 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h5 style={{ textAlign: "left" }}>
                        Day 1: Introduction to Genetic Variation
                        <br /> Lecture 1: Overview of Genetic Variation
                        <br />
                        Topics Covered:
                        <br />
                        Definition of genetic variation
                        <br />
                        Sources of genetic variation: mutations, recombination,
                        and gene flow
                        <br />
                        Importance of genetic variation in evolution and
                        population genetics
                        <br />
                        Activities:
                        <br />
                        Watch an introductory video on genetic variation
                        <br />
                        Read textbook Chapter 10 on the basics of genetic
                        variation
                        <br />
                        Participate in a discussion forum about the significance
                        of genetic variation
                        <br />
                        <br />
                        ecture 2: Types of Mutations
                        <br />
                        Topics Covered:
                        <br />
                        Point mutations (substitutions, insertions, deletions)
                        <br />
                        Chromosomal mutations (duplications, inversions,
                        translocations)
                        <br />
                        Effects of mutations on protein function
                        <br />
                        Activities:
                        <br />
                        Examine case studies of different types of mutations
                        <br />
                        Complete a worksheet on identifying and categorizing
                        mutations
                        <br />
                        Group discussion on how mutations can be beneficial,
                        neutral, or harmful
                      </h5>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h5 style={{ textAlign: "left" }}>
                        Day 2: Mechanisms and Causes of Mutations
                        <br />
                        Lecture 3: Mechanisms of Mutation
                        <br />
                        Topics Covered:
                        <br />
                        Spontaneous mutations and their causes (e.g., errors
                        during DNA replication)
                        <br />
                        Induced mutations and mutagens (e.g., radiation,
                        chemicals)
                        <br />
                        DNA repair mechanisms and their role in mutation
                        prevention
                        <br />
                        Activities:
                        <br />
                        Watch animations showing how different mutagens cause
                        mutations
                        <br />
                        Read research articles on spontaneous vs. induced
                        mutations
                        <br />
                        Quiz on the mechanisms and causes of mutations
                        <br />
                        <br />
                        Lecture 4: Genetic Variation Through Recombination
                        <br />
                        Topics Covered:
                        <br />
                        Role of meiosis in genetic variation
                        <br />
                        Crossing over and independent assortment
                        <br />
                        Impact of recombination on genetic diversity
                        <br />
                        Activities:
                        <br />
                        Review meiosis through interactive simulations
                        <br />
                        Create diagrams illustrating crossing over and
                        independent assortment
                        <br />
                        Discussion on the evolutionary advantages of genetic
                        recombination
                      </h5>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h5 style={{ textAlign: "left" }}>
                        {" "}
                        Day 3: Implications and Applications of Genetic
                        Variation
                        <br />
                        Lecture 5: Genetic Variation in Populations
                        <br />
                        Topics Covered:
                        <br />
                        Hardy-Weinberg equilibrium
                        <br />
                        Factors affecting allele frequencies (natural selection,
                        genetic drift, gene flow, mutation)
                        <br />
                        Measuring genetic variation within and between
                        populations
                        <br />
                        Activities:
                        <br />
                        Solve problems related to Hardy-Weinberg equilibrium
                        <br />
                        Analyze population genetics data sets
                        <br />
                        Group activity to simulate the effects of different
                        evolutionary forces on genetic variation
                        <br />
                        <br />
                        Lecture 6: Applications and Ethical Considerations
                        <br />
                        Topics Covered:
                        <br />
                        Use of genetic variation in medicine (e.g., personalized
                        medicine, genetic screening)
                        <br />
                        Agricultural applications (e.g., crop improvement,
                        livestock breeding)
                        <br />
                        Ethical issues related to genetic manipulation and
                        privacy
                        <br />
                        Activities:
                        <br />
                        Watch a documentary on the applications of genetic
                        variation in biotechnology
                        <br />
                        Debate on the ethical implications of genetic
                        engineering and screening
                        <br />
                        Write a reflection essay on the potential benefits and
                        risks of manipulating genetic variation
                      </h5>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Tab>
          <Tab eventKey="m3" title="Module 3">
            <h3>MODERN GENETIC TECHNIQUES</h3>
            <p>
              <h4>
                Modern genetic techniques encompass advanced methods used to
                study and manipulate genetic material. Techniques such as
                Polymerase Chain Reaction (PCR) allow for the amplification of
                specific DNA sequences, while CRISPR-Cas9 enables precise
                editing of genes. DNA sequencing technologies, like
                next-generation sequencing (NGS), provide detailed insights into
                genetic information by rapidly determining the order of
                nucleotides. These techniques have revolutionized fields such as
                medicine, agriculture, and biotechnology by facilitating genetic
                research, improving disease diagnosis and treatment, and
                enhancing crop and livestock breeding.
              </h4>
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Day 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Day 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h5 style={{ textAlign: "left" }}>
                        {" "}
                        Day 1: Introduction to Modern Genetic Techniques
                        <br />
                        Lecture 1: Overview of Modern Genetic Techniques
                        <br />
                        Topics Covered:
                        <br />
                        Definition and significance of modern genetic techniques
                        <br />
                        Brief history and evolution of genetic engineering
                        <br />
                        Applications in various fields: medicine, agriculture,
                        biotechnology
                        <br />
                        Activities:
                        <br />
                        Watch introductory videos on CRISPR-Cas9 and other
                        modern techniques
                        <br />
                        Read articles on the impact of genetic techniques on
                        society
                        <br />
                        Participate in a discussion on the ethical
                        considerations of genetic manipulation
                        <br />
                        <br />
                        Lecture 2: Polymerase Chain Reaction (PCR)
                        <br />
                        Topics Covered:
                        <br />
                        Principle and steps of PCR
                        <br />
                        Applications in DNA cloning, sequencing, and diagnostics
                        <br />
                        Variants and modifications of PCR techniques
                        <br />
                        Activities:
                        <br />
                        Hands-on PCR simulation or demonstration
                        <br />
                        Analyze PCR results and interpret gel electrophoresis
                        data
                        <br />
                        Quiz on the principles and applications of PCR
                      </h5>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h5 style={{ textAlign: "left" }}>
                        {" "}
                        Day 2: CRISPR-Cas9 and Genetic Editing
                        <br />
                        Lecture 3: CRISPR-Cas9 Technology
                        <br />
                        Topics Covered:
                        <br />
                        Mechanism of CRISPR-Cas9 for genome editing
                        <br />
                        Applications in gene knockout, gene insertion, and gene
                        therapy
                        <br />
                        Ethical considerations and controversies surrounding
                        CRISPR-Cas9
                        <br />
                        Activities:
                        <br />
                        Watch demonstrations of CRISPR-Cas9 editing in action
                        <br />
                        Discuss case studies on successful applications of
                        CRISPR-Cas9
                        <br />
                        Debate on the ethical implications of editing the human
                        genome
                        <br />
                        <br />
                        Lecture 4: Next-Generation Sequencing (NGS)
                        <br />
                        Topics Covered:
                        <br />
                        Principles and workflow of NGS technologies (e.g.,
                        Illumina sequencing)
                        <br />
                        Applications in genomics, transcriptomics, and
                        personalized medicine
                        <br />
                        Challenges and future directions in NGS technology
                        <br />
                        Activities:
                        <br />
                        Analyze NGS data sets to identify genetic variations
                        <br />
                        Review research papers on the impact of NGS in
                        biomedical research
                        <br />
                        Group discussion on the potential of NGS in advancing
                        precision medicine
                      </h5>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Tab>
          <Tab eventKey="m4" title="Module 4">
            <h3>ETHICAL ISSUES IN GENETICS</h3>
            <p>
              <h4>
                Ethical issues in genetics involve the moral implications and
                societal impacts of genetic research and technology. Key
                concerns include privacy and confidentiality of genetic
                information, potential discrimination based on genetic traits,
                and the ethical considerations of genetic modifications in
                humans, such as gene editing and cloning. Additionally, the use
                of genetic data in reproductive decisions and the potential for
                "designer babies" raise significant ethical debates. Ensuring
                informed consent, equitable access to genetic advancements, and
                responsible use of genetic technologies are crucial in
                addressing these ethical challenges.
              </h4>
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Day 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Day 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Day 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h5 style={{ textAlign: "left" }}>
                        {" "}
                        Day 1: Introduction to Ethical Issues in Genetics
                        <br />
                        Lecture 1: Overview of Ethical Issues in Genetics
                        <br />
                        Topics Covered:
                        <br />
                        Definition and scope of ethical issues in genetics
                        <br />
                        Historical context and landmark ethical debates (e.g.,
                        eugenics)
                        <br />
                        Importance of ethical guidelines and regulations in
                        genetic research
                        <br />
                        Activities:
                        <br />
                        Watch a documentary on the history of eugenics and its
                        ethical implications
                        <br />
                        Read foundational ethical principles in genetics
                        research
                        <br />
                        Discuss case studies on ethical dilemmas faced in
                        genetic counseling
                        <br />
                        <br />
                        Lecture 2: Privacy and Genetic Information
                        <br />
                        Topics Covered:
                        <br />
                        Challenges and risks associated with genetic privacy
                        <br />
                        Legal protections and policies safeguarding genetic data
                        <br />
                        Ethical considerations in genetic testing and data
                        sharing
                        <br />
                        Activities:
                        <br />
                        Analyze ethical guidelines from international
                        organizations on genetic privacy
                        <br />
                        Debate on the balance between genetic research
                        advancement and individual privacy rights
                        <br />
                        Role-play scenarios on handling genetic information in
                        clinical settings
                      </h5>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h5 style={{ textAlign: "left" }}>
                        Day 2: Ethical Considerations in Genetic Engineering
                        <br />
                        Lecture 3: Genetic Engineering and Human Applications
                        <br />
                        opics Covered:
                        <br />
                        Ethical implications of genetic engineering in humans
                        <br />
                        Controversies surrounding gene editing technologies
                        (e.g., CRISPR-Cas9)
                        <br />
                        Bioethical principles governing gene therapy and
                        enhancement
                        <br />
                        Activities:
                        <br />
                        Watch videos on recent advancements in gene editing and
                        ethical debates
                        <br />
                        Discuss case studies on gene therapy successes and
                        failures
                        <br />
                        Ethical analysis of hypothetical scenarios involving
                        genetic enhancements
                        <br />
                        <br />
                        Lecture 4: Ethical Issues in Genetic Research and
                        Commercialization
                        <br />
                        Topics Covered:
                        <br />
                        Ethical challenges in genetic research involving
                        vulnerable populations
                        <br />
                        Commercialization of genetic technologies and access to
                        treatments
                        <br />
                        Fairness and equity in genetic testing and personalized
                        medicine
                        <br />
                        Activities:
                        <br />
                        Group discussion on the ethics of conducting genetic
                        research in developing countries
                        <br />
                        Debate on the role of profit motives in genetic testing
                        and therapy
                        <br />
                        Case study analysis on ethical issues in genetic
                        patenting and intellectual property rights
                      </h5>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h5 style={{ textAlign: "left" }}>
                        {" "}
                        Day 3: Future Directions and Responsible Innovation
                        <br />
                        Lecture 5: Emerging Ethical Issues in Genetics
                        <br />
                        Topics Covered:
                        <br />
                        Ethical considerations of genetic enhancements and
                        designer babies
                        <br />
                        Regulation and governance of emerging genetic
                        technologies
                        <br />
                        Public engagement and education on ethical issues in
                        genetics
                        <br />
                        Activities:
                        <br />
                        Participate in a mock public debate on the ethics of
                        genetic enhancements
                        <br />
                        Design a campaign to raise awareness about ethical
                        issues in genetics
                        <br />
                        Reflective essay on the responsibilities of scientists
                        and policymakers in guiding ethical practices in
                        genetics
                      </h5>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Tab>
          <Tab eventKey="m5" title="Module 5">
            <h3>REVIEW AND FINAL EXAM</h3>
            <p>
              <h4>
                The review and final exam in a genetics course provide a
                comprehensive overview of the material covered, including DNA
                structure and function, genetic variation and mutation, modern
                genetic techniques, and ethical issues in genetics. The review
                sessions reinforce key concepts and address any areas of
                difficulty, ensuring students have a solid understanding. The
                final exam typically includes a mix of multiple-choice, short
                answer, and essay questions to assess students' knowledge and
                critical thinking skills. This assessment measures students'
                grasp of genetic principles and their ability to apply this
                knowledge to real-world scenarios.
              </h4>
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Day 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Day 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h5 style={{ textAlign: "left" }}>
                        {" "}
                        Day 1: Review Sessions
                        <br />
                        Session 1: Comprehensive Review of Genetics Concepts
                        <br />
                        Topics Covered:
                        <br />
                        DNA structure and function
                        <br />
                        Genetic variation and mutation
                        <br />
                        Modern genetic techniques
                        <br />
                        Ethical issues in genetics
                        <br />
                        Activities:
                        <br />
                        Recap of key concepts through interactive quizzes and
                        exercises
                        <br />
                        Group discussions to clarify doubts and reinforce
                        understanding
                        <br />
                        Practice problems and case studies related to each topic
                        <br />
                        <br />
                        Session 2: Application and Integration of Concepts
                        <br />
                        Topics Covered:
                        <br />
                        Practical applications of genetic principles in
                        medicine, agriculture, and biotechnology
                        <br />
                        Critical analysis of research papers and case studies
                        <br />
                        Ethical dilemmas and decision-making scenarios
                        <br />
                        Activities:
                        <br />
                        Hands-on activities to apply genetic techniques (e.g.,
                        PCR simulation, gene editing scenarios)
                        <br />
                        Group presentations on ethical case studies in genetics
                        <br />
                        Peer feedback and discussion on real-world implications
                        of genetic research
                      </h5>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h5 style={{ textAlign: "left" }}>
                        {" "}
                        Day 2: Final Exam Preparation
                        <br />
                        Exam Preparation Session:
                        <br />
                        Topics Covered:
                        <br />
                        Exam format and structure
                        <br />
                        Tips for effective exam preparation and time management
                        <br />
                        Review of sample questions and practice exams
                        <br />
                        Activities:
                        <br />
                        Mock exam with timed conditions to simulate the actual
                        test
                        <br />
                        Q&A session to address last-minute doubts and concerns
                        <br />
                        Discussion on exam strategies and approaches for
                        different question types
                      </h5>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Course;
