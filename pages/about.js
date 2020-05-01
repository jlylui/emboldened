import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";

const banner = {
  title: "About us",
  subTitle: "",
  image: "/static/img/header-02-about-us.jpg"
};
const assetPrefix = process.env.ASSET_PREFIX;
const About = () => {
  return (
    <Layout banner={banner}>
      <div className="section section-1">
        <div className="container">
          <h2>About Emboldened</h2>
          <p>
            Emboldened was born over countless coffee chats, thousands of
            messages asking difficult questions about work life and the struggle
            to balance the calling of God in the modern world.
          </p>
          <p>
            Emboldened gathers women passionate about bringing God into their
            daily lives &amp; work places. We want every woman to leave
            spiritually strengthened in their identity in God, equipped with
            skills to further their careers and with renewed hearts to reach the
            lost.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h2>Our vision &amp; mission</h2>
          <ul>
            <li>
              We believe that the office cubicle &amp; work kitchen chats are
              perfect mission fields to share God’s love.
            </li>
            <li>
              That your presence as God’s daughter changes the atmosphere of
              your work space; the direction of your company and by extension
              the vision of your industry.
            </li>
            <li>
              To boost your courage &amp; confidence as a woman of God, to be an
              answer to the prayers of those who are struggling and hurting
              around you.
            </li>
            <li>
              Provide tools and training, enabling you to possess the skills and
              qualifications required to succeed in your work role.
            </li>
            <li>
              To provide a space for honest discussion, regardless of calling
              and struggles, faced by women every single day.
            </li>
          </ul>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h2>The Team</h2>
          <p className="">
            We are a diverse team working in various industries with a passion
            for women related ministries. Our friendships and open discussions
            regarding the struggles faced by Christians - in ministry, at work
            and as women - fuels the desire to acknowledge and support others
            like us out there!
          </p>
          <div className="team">
            <div className="row">
              <ProfileCard
                name="Su Heng"
                title="Board of Directors (Sydney)"
                image="Su.jpg"
                description="Su is currently completing her Graduate Diploma in Divinity and has worked in various industries including non-profit, food & beverage and the arts. Her passion includes connecting God’s heart to women in the marketplace and her definition of fun is, a trip to a library and spending limitless hours there. Su leads the team in vision implementation."
              />
              <ProfileCard
                name="Flora Ngai"
                title="Board of Directors (Sydney)"
                image="Flora.jpg"
                description="Flora is a Marketing professional who is passionate about new technology and analytics. Sometimes, she geeks out on Digital Marketing and test runs new apps and software. For fun, Flora loves playing piano duets and making up silly tunes to sing to her 4 months old daughter."
              />
              <ProfileCard
                name="Taizya Phiri"
                title="Board of Directors (Sydney)"
                image="Taizya.jpg"
                description="Taizya, affectionately known as Tazi is a social worker in the NGO space and works with at risk youth. She’s passionate about social justice, inclusion and visibility of women in society. Outside of work, Taizya loves connecting with new people and brewing kombucha."
              />
              <ProfileCard
                name="Joycelyn Lui"
                title="Website Creation Team (Sydney)"
                image="Joycelyn.jpg"
                description="Joycelyn is a software engineer with experiences in full-stack web development, loves exploring new technologies and aspires to work on projects that deliver life-changing solutions to make a difference in the world. For fun, she spends her time playing sports such as basketball, running, hiking and indoor rock climbing."
              />
              <ProfileCard
                name="Josephine Cagu"
                title="(Sydney)"
                image="Josephine.jpg"
                description="Josephine has just completed her Doctor of Philosophy in Public Health and is passionate about raising cultural awareness in health service delivery to reduce disparities and promote inclusivity. She has spent over a decade in Malaysia and enjoys travelling, cooking and all things related to wellness in her spare time."
              />
              <ProfileCard
                name="Mei’en Lim"
                title="Secretary (Perth)"
                image="Meien.jpg"
                description="Mei’En is a clinical psychologist and also has a PhD. She works in both the government department in Western Australia and the private sector, and sees a wide range of clients across the lifespan. Mei’En loves being close to nature, connecting with others, and word puzzles. Being married to Barry who works FIFO, she fluctuates between obsessing over her Rhodesian Ridgeback and wifedom."
              />
              <ProfileCard
                name="Marissa Teo"
                title="leads the expansion of Emboldened in Singapore (Singapore)"
                image="Marissa.jpg"
                description="Marissa has covered regional ASEAN roles across Business Development and Account Management in her 5.5 years at Oracle NetSuite. She is passionate about causes that seek to empower the future generation, especially involving technology. Marissa speaks 4 languages and has lived in 4 different cities!"
              />
              <ProfileCard
                name="Uma Cristy"
                title="leads the expansion of Emboldened in Kuala Lumpur (Malaysia)"
                image="Uma.jpg"
                description="For the past 6 years, Uma has been working in the Human Resource field placing people to the right job. She is passionate about people walking in their fullest potential that God has ordained for them. Easy-going, jovial and always the centre of laughter, Uma winds down in her spare time buried in a good book!"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
