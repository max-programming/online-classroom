import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/common/Header/Header';
import { BrowseClassroomsScreen } from '../components/screens/browse-classrooms/BrowseClassroomsScreen';

const BrowseClassroomsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Find a Classroom</title>
        <meta
          name="description"
          content="sign up now for a teacher or a student account in order to access the website"
        />
      </Head>

      <Header />

      <main className="container m-auto">
        <BrowseClassroomsScreen />
      </main>
    </>
  );
};

export default BrowseClassroomsPage;
