import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { FC, ReactNode } from 'react';
import Card from '../components/Card';
import FooterImage from '../components/FooterImage';
import Layout from '../components/layout/Layout';
import { PageContainer } from '../components/PageStyles/StyledComponents';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

const chipStyle = { margin: '0.5em' };

function createData(
  name: string,
  start: string,
  end: string,
  speaker: string,
  resources?: ReactNode,
) {
  return { name, start, end, speaker, resources };
}

const workShopRows = [
  createData(
    'Intro to DL with PyTorch and MNIST',
    'July 14 - 5:00 PM',
    'July 14 - 6:00 PM',
    'Arnav Komaragiri',
    <div>
      <Chip
        label="Slides"
        variant="outlined"
        component="a"
        style={chipStyle}
        href="https://drive.google.com/file/d/10duAHdWOAIPn8Rt-S_xPEM-Ta-RrnPyB/view"
        target="_blank"
        clickable
      />
    </div>,
  ),
  createData(
    'Ask Trina Anything [Google Cloud]',
    'July 28 - 7:00 PM',
    'July 28 - 8:00 PM',
    'Trina L. Martin',
    <div>
    <Chip
      label="Recording"
      variant="outlined"
      component="a"
      style={chipStyle}
      href="https://drive.google.com/file/d/1Ocf-iie8sxtrDhY983oC2Tn2Mnd1l6S8/view?usp=sharing"
      target="_blank"
      clickable
    />
  </div>,
  ),
  createData(
    'Intro to Game Development',
    'September 8 - 5:00 PM',
    'September 8 - 6:00 PM',
    'Trung Nguyen',
    <div>
      <Chip
        label="Slides"
        variant="outlined"
        component="a"
        style={chipStyle}
        href="https://docs.google.com/presentation/d/1JSUlCEywv3zcoFClrIb8PP4aZFxAOn8WWMHtHRzRKPo/view"
        target="_blank"
        clickable
      />
      <Chip
        label="Files"
        variant="outlined"
        component="a"
        style={chipStyle}
        href="https://drive.google.com/drive/folders/143sqRoW5LMU8qCI0grSyzv5B-BMs12-J"
        target="_blank"
        clickable
      />
    </div>,
  ),
  createData(
    'Getting Started with Google Cloud for Hackathons [Google Cloud]',
    'September 8 - 7:00 PM',
    'October 8 - 9:00 PM',
    'Laurie White',
    <div>
      <Chip
        label="Guide"
        variant="outlined"
        component="a"
        style={chipStyle}
        href="https://docs.google.com/document/d/1I9nr2KiBbAHmUS22RQtZrtmeV8bMVKtm5WcO_xKT038/view"
        target="_blank"
        clickable
      />
      <Chip
        label="Recording"
        variant="outlined"
        component="a"
        style={chipStyle}
        href="https://drive.google.com/file/d/1bMvf39kbdOzIOv0OOgoa6oeD5CC7FlFX/view?usp=sharing"
        target="_blank"
        clickable
      />
    </div>,
  ),
  createData(
    'Intro to Web Dev',
    'October 4 - 7:00 PM',
    'October 4 - 8:00 PM',
    'Bao Huynh',
    <div>
      <Chip
        label="Sign up"
        variant="outlined"
        component="a"
        style={chipStyle}
        href="https://forms.gle/vMRHhGT7fute9zuu6"
        target="_blank"
        clickable
      />
    </div>,
  ),
  createData('APIs 101 [Postman]', 'October 19 - 7:00 PM', 'October 19 - 8:30 PM', 'Ruby Sattar'),
];

const WorkshopsPage: FC = () => (
  <PageContainer>
    <Layout page="workshops">
      <SEO />
      <main>
        <section id="about" className="py-10 lg:pb-24 lg:pt-24">
          <div className="container mx-auto text-center">
            <SectionHeader style={{ marginTop: '5rem' }}>WORKSHOPS</SectionHeader>
            <div className="grid sm:grid-cols-1">
              <div className="mt-12 text-left text-black">
                <Card className="m-4 bg-white text-center is-centered is-rounded">
                  <p style={{ fontSize: '20px' }}>
                    Did you know we hold lots of awesome workshops before hacking even starts? We
                    host technical speakers and teach you new skills that prepare you to learn and
                    create at MakeUC. See below for information on upcoming workshops and resources
                    from past events, and be sure to check out our social media or our{' '}
                    <a href="https://linktr.ee/MakeUC" target="_blank" rel="noreferrer">
                      Linktree
                    </a>{' '}
                    for official links to register!
                  </p>
                </Card>

                <div style={{ margin: '1rem' }}>
                  <TableContainer className="schedule-bg mv3 is-rounded" component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead className="schedule-gray-row">
                        <TableRow
                          style={{ backgroundColor: '#191919', textTransform: 'uppercase' }}
                        >
                          <TableCell align="center" className="schedule-name">
                            <span
                              className="font-primary b"
                              style={{ fontSize: '20px', color: '#EDEDED' }}
                            >
                              Workshop
                            </span>
                          </TableCell>
                          <TableCell align="center" className="schedule-date-time">
                            <span
                              className="font-primary b"
                              style={{ fontSize: '20px', color: '#EDEDED' }}
                            >
                              Start Time (EDT)
                            </span>
                          </TableCell>
                          <TableCell align="center" className="schedule-date-time">
                            <span
                              className="font-primary b"
                              style={{ fontSize: '20px', color: '#EDEDED' }}
                            >
                              End Time (EDT)
                            </span>
                          </TableCell>
                          <TableCell align="center" className="schedule-name">
                            <span
                              className="font-primary b"
                              style={{ fontSize: '20px', color: '#EDEDED' }}
                            >
                              Speaker
                            </span>
                          </TableCell>
                          <TableCell align="center" className="schedule-name">
                            <span
                              className="font-primary b"
                              style={{ fontSize: '20px', color: '#EDEDED' }}
                            >
                              Resources
                            </span>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {workShopRows.map(row => (
                          <TableRow key={row.name}>
                            <TableCell
                              align="center"
                              className="schedule-name"
                              component="th"
                              scope="row"
                            >
                              <span className="b" style={{ fontSize: '20px' }}>
                                {row.name}
                              </span>
                            </TableCell>
                            <TableCell
                              align="center"
                              className="schedule-date-time"
                              style={{ fontSize: '20px' }}
                            >
                              {row.start}
                            </TableCell>
                            <TableCell
                              align="center"
                              className="schedule-date-time"
                              style={{ fontSize: '20px' }}
                            >
                              {row.end}
                            </TableCell>
                            <TableCell
                              align="center"
                              className="schedule-name"
                              style={{ fontSize: '20px' }}
                            >
                              {row.speaker}
                            </TableCell>
                            <TableCell align="center" style={{ fontSize: '20px' }}>
                              {row.resources}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterImage />
      </main>
    </Layout>
  </PageContainer>
);
export default WorkshopsPage;
