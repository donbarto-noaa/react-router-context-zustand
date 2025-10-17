import { useState } from 'react';
import { 
  Button, 
  Badge, 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  SearchField, 
  QuietSelect, 
  PhoneField, 
  RangeCalendar, 
  RadioGroup, 
  Radio, 
  TanstackTable, 
  SortableColumnHeader
} from '@nwsconnect/atmosphere';
import '@nwsconnect/atmosphere/style.css';


export default function TestAtmosphere() {
  const [country, setCountry] = useState('us');
  const [value, setValue] = useState('');
  const [selectedKey, setSelectedKey] = useState('');
  const [dateRange, setDateRange] = useState(null);
  
    const handleSelectionChange = (key: string) => {
      setSelectedKey(key);
      console.log('Selected Key:', key);
    };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Atmosphere Library Test</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg mb-2">Buttons</h2>
          <Button variant="filled" color="accent" onPress={() => {console.log('button pressed')}}>New Button</Button>
          <Button variant="outlined" color="primary" >New Button</Button>
        </div>
        
        <div>
          <h2 className="text-lg mb-2">Badges</h2>
          <div className='w-40 px-2 py-2 m-5'>
            <Badge icon="circle-check" label="Approved" size="md" variant='informative' />
            <Badge variant='positive' icon='circle-plus' label="Another Badge" />
          </div>
          <RadioGroup
            description=""
            label="Favorite sport"
            size='sm'
            className='px-4 mx-4'
            orientation='vertical'
          >
            <Radio value="soccer" className='px-4 mx-4'>
              Soccer
            </Radio>
            <Radio value="baseball" className='px-4 mx-4'>
              Baseball
            </Radio>
            <Radio value="basketball" className='px-4 mx-4'>
              Basketball
            </Radio>
          </RadioGroup>
          <div className="flex flex-col gap-4">
            <SortableColumnHeader
                id='name'
                
              >
                Name
              </SortableColumnHeader>
            <TanstackTable
              columnVisibilityControl={function Ki(){}}
              columns={[
                {
                  cell: function Ki(){},
                  header: function Ki(){},
                  id: 'select'
                },
                {
                  accessorKey: 'name',
                  cell: function Ki(){},
                  enableColumnFilter: true,
                  enableSorting: true,
                  filterFn: 'includesString',
                  header: function Ki(){},
                  id: 'name'
                },
                {
                  accessorKey: 'email',
                  cell: function Ki(){},
                  enableColumnFilter: true,
                  enableSorting: true,
                  filterFn: 'includesString',
                  header: function Ki(){},
                  id: 'email'
                },
                {
                  accessorKey: 'phone',
                  cell: function Ki(){},
                  enableColumnFilter: true,
                  enableSorting: true,
                  filterFn: 'includesString',
                  header: function Ki(){},
                  id: 'phone'
                },
                {
                  accessorKey: 'job_title',
                  cell: function Ki(){},
                  enableColumnFilter: true,
                  enableSorting: true,
                  filterFn: function Ki(){},
                  header: function Ki(){},
                  id: 'Job Title'
                },
                {
                  accessorKey: 'organization',
                  cell: function Ki(){},
                  enableColumnFilter: true,
                  enableSorting: true,
                  filterFn: 'includesString',
                  header: function Ki(){},
                  id: 'organization'
                },
                {
                  accessorKey: 'isActive',
                  cell: function Ki(){},
                  enableColumnFilter: true,
                  enableSorting: true,
                  filterFn: function Ki(){},
                  header: function Ki(){},
                  id: 'isActive'
                },
                {
                  cell: function Ki(){},
                  header: function Ki(){},
                  id: 'edit'
                }
              ]}
              data={[
                {
                  city: 'Oakland',
                  email: 'otomasik0@blog.com',
                  id: 1,
                  isActive: false,
                  job_title: 'Software Consultant',
                  name: 'Obadias Tomasik',
                  organization: 'Oba',
                  phone: '(510) 5399326',
                  slack: 'otomasik0',
                  state: 'CA'
                },
                {
                  city: 'Phoenix',
                  email: 'fchaulk1@xinhuanet.com',
                  id: 2,
                  isActive: false,
                  job_title: 'Staff Scientist',
                  name: 'Fallon Chaulk',
                  organization: 'Jayo',
                  phone: '(480) 9758734',
                  slack: 'fchaulk1',
                  state: 'AZ'
                },
                {
                  city: 'Mesa',
                  email: 'bbardell2@abc.net.au',
                  id: 3,
                  isActive: true,
                  job_title: 'Recruiter',
                  name: 'Barbaraanne Bardell',
                  organization: 'Mycat',
                  phone: '(480) 2779125',
                  slack: 'bbardell2',
                  state: 'AZ'
                },
                {
                  city: 'Lexington',
                  email: 'ochampkin3@spiegel.de',
                  id: 4,
                  isActive: true,
                  job_title: 'Statistician III',
                  name: 'Olive Champkin',
                  organization: 'Babbleblab',
                  phone: '(859) 9298307',
                  slack: 'ochampkin3',
                  state: 'KY'
                },
                {
                  city: 'Schenectady',
                  email: 'mhaws4@reverbnation.com',
                  id: 5,
                  isActive: false,
                  job_title: 'Systems Administrator IV',
                  name: 'Massimiliano Haws',
                  organization: 'Twimbo',
                  phone: '(518) 4563099',
                  slack: 'mhaws4',
                  state: 'NY'
                },
                {
                  city: 'Washington',
                  email: 'ihoward5@hp.com',
                  id: 6,
                  isActive: false,
                  job_title: 'Cost Accountant',
                  name: 'Ileane Howard',
                  organization: 'Thoughtmix',
                  phone: '(202) 7655465',
                  slack: 'ihoward5',
                  state: 'DC'
                },
                {
                  city: 'Peoria',
                  email: 'dbakhrushkin6@ocn.ne.jp',
                  id: 7,
                  isActive: true,
                  job_title: 'Software Engineer III',
                  name: 'Darryl Bakhrushkin',
                  organization: 'Meedoo',
                  phone: '(309) 3806133',
                  slack: 'dbakhrushkin6',
                  state: 'IL'
                },
                {
                  city: 'Charlotte',
                  email: 'apashan7@mlb.com',
                  id: 8,
                  isActive: true,
                  job_title: 'Environmental Specialist',
                  name: 'Augustine Pashan',
                  organization: 'Blogpad',
                  phone: '(704) 6283808',
                  slack: 'apashan7',
                  state: 'NC'
                },
                {
                  city: 'Boston',
                  email: 'mhoopper8@nature.com',
                  id: 9,
                  isActive: true,
                  job_title: 'VP Quality Control',
                  name: 'Marnia Hoopper',
                  organization: 'Skinder',
                  phone: '(978) 9101442',
                  slack: 'mhoopper8',
                  state: 'MA'
                },
                {
                  city: 'New York City',
                  email: 'dstorch9@pbs.org',
                  id: 10,
                  isActive: true,
                  job_title: 'Environmental Specialist',
                  name: 'Duane Storch',
                  organization: 'Abatz',
                  phone: '(646) 1847135',
                  slack: 'dstorch9',
                  state: 'NY'
                },
                {
                  city: 'Springfield',
                  email: 'ajeppensena@house.gov',
                  id: 11,
                  isActive: false,
                  job_title: 'Senior Cost Accountant',
                  name: 'Ailis Jeppensen',
                  organization: 'Jabbersphere',
                  phone: '(937) 5117354',
                  slack: 'ajeppensena',
                  state: 'OH'
                },
                {
                  city: 'Richmond',
                  email: 'gyerillb@sfgate.com',
                  id: 12,
                  isActive: true,
                  job_title: 'Quality Engineer',
                  name: 'Guglielma Yerill',
                  organization: 'Eadel',
                  phone: '(804) 5183746',
                  slack: 'gyerillb',
                  state: 'VA'
                },
                {
                  city: 'Sacramento',
                  email: 'dartheyc@hp.com',
                  id: 13,
                  isActive: true,
                  job_title: 'Food Chemist',
                  name: 'Doralynn Arthey',
                  organization: 'Trunyx',
                  phone: '(916) 9845982',
                  slack: 'dartheyc',
                  state: 'CA'
                },
                {
                  city: 'Sacramento',
                  email: 'fclemenzad@deviantart.com',
                  id: 14,
                  isActive: true,
                  job_title: 'Payment Adjustment Coordinator',
                  name: 'Fancie Clemenza',
                  organization: 'Quinu',
                  phone: '(916) 7275888',
                  slack: 'fclemenzad',
                  state: 'CA'
                },
                {
                  city: 'Spartanburg',
                  email: 'jflauberte@nsw.gov.au',
                  id: 15,
                  isActive: true,
                  job_title: 'Developer III',
                  name: 'Jolee Flaubert',
                  organization: 'Browsetype',
                  phone: '(864) 6294067',
                  slack: 'jflauberte',
                  state: 'SC'
                },
                {
                  city: 'London',
                  email: 'ppaschekf@surveymonkey.com',
                  id: 16,
                  isActive: false,
                  job_title: 'Executive Secretary',
                  name: 'Peri Paschek',
                  organization: 'Skaboo',
                  phone: '(606) 9325934',
                  slack: 'ppaschekf',
                  state: 'KY'
                },
                {
                  city: 'Arlington',
                  email: 'jpaumierg@ebay.com',
                  id: 17,
                  isActive: true,
                  job_title: 'Health Coach II',
                  name: 'Jacinda Paumier',
                  organization: 'Fatz',
                  phone: '(571) 9516980',
                  slack: 'jpaumierg',
                  state: 'VA'
                },
                {
                  city: 'Dayton',
                  email: 'lbonnifaceh@networkadvertising.org',
                  id: 18,
                  isActive: true,
                  job_title: 'Staff Scientist',
                  name: 'Loretta Bonniface',
                  organization: 'Tagchat',
                  phone: '(937) 7955311',
                  slack: 'lbonnifaceh',
                  state: 'OH'
                },
                {
                  city: 'San Jose',
                  email: 'sbanhami@over-blog.com',
                  id: 19,
                  isActive: true,
                  job_title: 'Desktop Support Technician',
                  name: 'Sax Banham',
                  organization: 'Jazzy',
                  phone: '(408) 5666207',
                  slack: 'sbanhami',
                  state: 'CA'
                },
                {
                  city: 'Ogden',
                  email: 'ddepportj@mysql.com',
                  id: 20,
                  isActive: true,
                  job_title: 'Administrative Officer',
                  name: 'Darcy Depport',
                  organization: 'Eidel',
                  phone: '(801) 8317072',
                  slack: 'ddepportj',
                  state: 'UT'
                },
                {
                  city: 'El Paso',
                  email: 'pmaask@tiny.cc',
                  id: 21,
                  isActive: false,
                  job_title: 'Office Assistant II',
                  name: 'Peria Maas',
                  organization: 'Tagtune',
                  phone: '(915) 5026056',
                  slack: 'pmaask',
                  state: 'TX'
                },
                {
                  city: 'Wichita',
                  email: 'climonl@sourceforge.net',
                  id: 22,
                  isActive: true,
                  job_title: 'VP Product Management',
                  name: 'Cristi Limon',
                  organization: 'Skinder',
                  phone: '(316) 7335707',
                  slack: 'climonl',
                  state: 'KS'
                },
                {
                  city: 'Miami',
                  email: 'ldinkinm@bizjournals.com',
                  id: 23,
                  isActive: false,
                  job_title: 'Mechanical Systems Engineer',
                  name: 'Leopold Dinkin',
                  organization: 'Meevee',
                  phone: '(305) 4541325',
                  slack: 'ldinkinm',
                  state: 'FL'
                },
                {
                  city: 'Brooklyn',
                  email: 'ysimakn@nyu.edu',
                  id: 24,
                  isActive: true,
                  job_title: 'Financial Advisor',
                  name: 'Ysabel Simak',
                  organization: 'Camido',
                  phone: '(718) 1964519',
                  slack: 'ysimakn',
                  state: 'NY'
                },
                {
                  city: 'Louisville',
                  email: 'asansono@nsw.gov.au',
                  id: 25,
                  isActive: true,
                  job_title: 'Geologist III',
                  name: 'Annelise Sanson',
                  organization: 'Voolith',
                  phone: '(502) 2200947',
                  slack: 'asansono',
                  state: 'KY'
                },
                {
                  city: 'Birmingham',
                  email: 'ksothamp@163.com',
                  id: 26,
                  isActive: false,
                  job_title: 'VP Sales',
                  name: 'Kalinda Sotham',
                  organization: 'Gabtune',
                  phone: '(205) 7008352',
                  slack: 'ksothamp',
                  state: 'AL'
                },
                {
                  city: 'Springfield',
                  email: 'hleonardsq@taobao.com',
                  id: 27,
                  isActive: true,
                  job_title: 'Financial Analyst',
                  name: 'Harley Leonards',
                  organization: 'Babbleopia',
                  phone: '(217) 4534432',
                  slack: 'hleonardsq',
                  state: 'IL'
                },
                {
                  city: 'Wichita',
                  email: 'cmeasenr@uiuc.edu',
                  id: 28,
                  isActive: false,
                  job_title: 'Product Engineer',
                  name: 'Clive Measen',
                  organization: 'Skajo',
                  phone: '(316) 7147282',
                  slack: 'cmeasenr',
                  state: 'KS'
                },
                {
                  city: 'Des Moines',
                  email: 'gboribals@samsung.com',
                  id: 29,
                  isActive: true,
                  job_title: 'Geologist II',
                  name: 'Gus Boribal',
                  organization: 'Gigabox',
                  phone: '(515) 8372607',
                  slack: 'gboribals',
                  state: 'IA'
                },
                {
                  city: 'Round Rock',
                  email: 'mdavidovt@mapy.cz',
                  id: 30,
                  isActive: true,
                  job_title: 'Executive Secretary',
                  name: 'Marquita Davidov',
                  organization: 'Photofeed',
                  phone: '(512) 1593285',
                  slack: 'mdavidovt',
                  state: 'TX'
                },
                {
                  city: 'Virginia Beach',
                  email: 'fcowseru@webs.com',
                  id: 31,
                  isActive: false,
                  job_title: 'Occupational Therapist',
                  name: 'Fonz Cowser',
                  organization: 'Twitterbeat',
                  phone: '(757) 8637580',
                  slack: 'fcowseru',
                  state: 'VA'
                },
                {
                  city: 'Huntington',
                  email: 'ikeddyv@xinhuanet.com',
                  id: 32,
                  isActive: false,
                  job_title: 'Programmer Analyst I',
                  name: 'Ingaborg Keddy',
                  organization: 'Jetwire',
                  phone: '(304) 5537427',
                  slack: 'ikeddyv',
                  state: 'WV'
                },
                {
                  city: 'Fresno',
                  email: 'gcreedw@cocolog-nifty.com',
                  id: 33,
                  isActive: true,
                  job_title: 'Operator',
                  name: 'Gae Creed',
                  organization: 'Mudo',
                  phone: '(209) 8758874',
                  slack: 'gcreedw',
                  state: 'CA'
                },
                {
                  city: 'Albuquerque',
                  email: 'mbrydsonx@mozilla.com',
                  id: 34,
                  isActive: true,
                  job_title: 'Financial Analyst',
                  name: 'Maure Brydson',
                  organization: 'Shufflester',
                  phone: '(505) 6238071',
                  slack: 'mbrydsonx',
                  state: 'NM'
                },
                {
                  city: 'North Little Rock',
                  email: 'fbindeny@archive.org',
                  id: 35,
                  isActive: true,
                  job_title: 'Media Manager II',
                  name: 'Floris Binden',
                  organization: 'Gigabox',
                  phone: '(501) 1685405',
                  slack: 'fbindeny',
                  state: 'AR'
                },
                {
                  city: 'Springfield',
                  email: 'pheminsleyz@elegantthemes.com',
                  id: 36,
                  isActive: false,
                  job_title: 'Community Outreach Specialist',
                  name: 'Philip Heminsley',
                  organization: 'Eare',
                  phone: '(413) 9659459',
                  slack: 'pheminsleyz',
                  state: 'MA'
                },
                {
                  city: 'San Jose',
                  email: 'lsokell10@wsj.com',
                  id: 37,
                  isActive: false,
                  job_title: 'Recruiter',
                  name: 'Laurianne Sokell',
                  organization: 'Talane',
                  phone: '(408) 9573609',
                  slack: 'lsokell10',
                  state: 'CA'
                },
                {
                  city: 'Houston',
                  email: 'ghasker11@auda.org.au',
                  id: 38,
                  isActive: false,
                  job_title: 'Associate Professor',
                  name: 'Gardie Hasker',
                  organization: 'Skivee',
                  phone: '(281) 3792619',
                  slack: 'ghasker11',
                  state: 'TX'
                },
                {
                  city: 'Wilkes Barre',
                  email: 'sbigglestone12@springer.com',
                  id: 39,
                  isActive: false,
                  job_title: 'Nurse',
                  name: 'Solomon Bigglestone',
                  organization: 'Innojam',
                  phone: '(570) 1358328',
                  slack: 'sbigglestone12',
                  state: 'PA'
                },
                {
                  city: 'Fresno',
                  email: 'bwaker13@moonfruit.com',
                  id: 40,
                  isActive: false,
                  job_title: 'Business Systems Development Analyst',
                  name: 'Blancha Waker',
                  organization: 'Tanoodle',
                  phone: '(559) 5025259',
                  slack: 'bwaker13',
                  state: 'CA'
                },
                {
                  city: 'Washington',
                  email: 'osorey14@addthis.com',
                  id: 41,
                  isActive: true,
                  job_title: 'VP Accounting',
                  name: 'Orville Sorey',
                  organization: 'Jamia',
                  phone: '(202) 3515483',
                  slack: 'osorey14',
                  state: 'DC'
                },
                {
                  city: 'San Francisco',
                  email: 'zbreeton15@samsung.com',
                  id: 42,
                  isActive: false,
                  job_title: 'Environmental Tech',
                  name: 'Zenia Breeton',
                  organization: 'Flipbug',
                  phone: '(415) 4956836',
                  slack: 'zbreeton15',
                  state: 'CA'
                },
                {
                  city: 'Troy',
                  email: 'spaulack16@va.gov',
                  id: 43,
                  isActive: true,
                  job_title: 'Chemical Engineer',
                  name: 'Simonette Paulack',
                  organization: 'Gabcube',
                  phone: '(248) 5172895',
                  slack: 'spaulack16',
                  state: 'MI'
                },
                {
                  city: 'York',
                  email: 'tfurman17@addtoany.com',
                  id: 44,
                  isActive: false,
                  job_title: 'Junior Executive',
                  name: 'Tiffani Furman',
                  organization: 'Trudoo',
                  phone: '(717) 6385720',
                  slack: 'tfurman17',
                  state: 'PA'
                },
                {
                  city: 'Sacramento',
                  email: 'bmcgenis18@phpbb.com',
                  id: 45,
                  isActive: false,
                  job_title: 'Software Test Engineer III',
                  name: 'Barb McGenis',
                  organization: 'Voonyx',
                  phone: '(916) 5701126',
                  slack: 'bmcgenis18',
                  state: 'CA'
                },
                {
                  city: 'Henderson',
                  email: 'gpawelek19@microsoft.com',
                  id: 46,
                  isActive: false,
                  job_title: 'Technical Writer',
                  name: 'Gavra Pawelek',
                  organization: 'Browsetype',
                  phone: '(702) 9319532',
                  slack: 'gpawelek19',
                  state: 'NV'
                },
                {
                  city: 'Houston',
                  email: 'imathan1a@illinois.edu',
                  id: 47,
                  isActive: false,
                  job_title: 'Media Manager IV',
                  name: 'Ilsa Mathan',
                  organization: 'Jabbersphere',
                  phone: '(713) 7724285',
                  slack: 'imathan1a',
                  state: 'TX'
                },
                {
                  city: 'Bradenton',
                  email: 'fkezourec1b@youtube.com',
                  id: 48,
                  isActive: true,
                  job_title: 'Sales Associate',
                  name: 'Flory Kezourec',
                  organization: 'Voonyx',
                  phone: '(941) 5818532',
                  slack: 'fkezourec1b',
                  state: 'FL'
                },
                {
                  city: 'Austin',
                  email: 'mtest1c@hexun.com',
                  id: 49,
                  isActive: true,
                  job_title: 'Quality Engineer',
                  name: 'Meyer Test',
                  organization: 'Ntag',
                  phone: '(512) 1410473',
                  slack: 'mtest1c',
                  state: 'TX'
                },
                {
                  city: 'Hartford',
                  email: 'mblowick1d@ustream.tv',
                  id: 50,
                  isActive: false,
                  job_title: 'Analog Circuit Design manager',
                  name: 'Mathilda Blowick',
                  organization: 'Pixope',
                  phone: '(860) 6741928',
                  slack: 'mblowick1d',
                  state: 'CT'
                },
                {
                  city: 'Seattle',
                  email: 'tsenner1e@creativecommons.org',
                  id: 51,
                  isActive: true,
                  job_title: 'Teacher',
                  name: 'Tabbatha Senner',
                  organization: 'Youfeed',
                  phone: '(206) 5901105',
                  slack: 'tsenner1e',
                  state: 'WA'
                },
                {
                  city: 'Atlanta',
                  email: 'osurphliss1f@army.mil',
                  id: 52,
                  isActive: true,
                  job_title: 'Media Manager I',
                  name: 'Odie Surphliss',
                  organization: 'Jayo',
                  phone: '(404) 1875905',
                  slack: 'osurphliss1f',
                  state: 'GA'
                },
                {
                  city: 'Los Angeles',
                  email: 'wspowart1g@mac.com',
                  id: 53,
                  isActive: false,
                  job_title: 'Staff Accountant III',
                  name: 'Wynnie Spowart',
                  organization: 'Zoomdog',
                  phone: '(213) 9956756',
                  slack: 'wspowart1g',
                  state: 'CA'
                },
                {
                  city: 'New York City',
                  email: 'gkellet1h@skyrock.com',
                  id: 54,
                  isActive: false,
                  job_title: 'Recruiting Manager',
                  name: 'Glory Kellet',
                  organization: 'Avavee',
                  phone: '(212) 5462330',
                  slack: 'gkellet1h',
                  state: 'NY'
                },
                {
                  city: 'Muskegon',
                  email: 'mprewer1i@go.com',
                  id: 55,
                  isActive: true,
                  job_title: 'Web Designer I',
                  name: 'Monroe Prewer',
                  organization: 'Feedfish',
                  phone: '(231) 4334543',
                  slack: 'mprewer1i',
                  state: 'MI'
                },
                {
                  city: 'New Haven',
                  email: 'rjain1j@wp.com',
                  id: 56,
                  isActive: false,
                  job_title: 'Food Chemist',
                  name: 'Royce Jain',
                  organization: 'Topicblab',
                  phone: '(203) 2915123',
                  slack: 'rjain1j',
                  state: 'CT'
                },
                {
                  city: 'Los Angeles',
                  email: 'rloding1k@imdb.com',
                  id: 57,
                  isActive: false,
                  job_title: 'Media Manager III',
                  name: 'Riane Loding',
                  organization: 'Voonix',
                  phone: '(323) 9367908',
                  slack: 'rloding1k',
                  state: 'CA'
                },
                {
                  city: 'Atlanta',
                  email: 'wfaucherand1l@msn.com',
                  id: 58,
                  isActive: false,
                  job_title: 'VP Accounting',
                  name: 'Woodrow Faucherand',
                  organization: 'Plambee',
                  phone: '(404) 3434304',
                  slack: 'wfaucherand1l',
                  state: 'GA'
                },
                {
                  city: 'Philadelphia',
                  email: 'cmatthewes1m@wsj.com',
                  id: 59,
                  isActive: false,
                  job_title: 'Dental Hygienist',
                  name: 'Chas Matthewes',
                  organization: 'Mudo',
                  phone: '(215) 3564082',
                  slack: 'cmatthewes1m',
                  state: 'PA'
                },
                {
                  city: 'Cape Coral',
                  email: 'agier1n@microsoft.com',
                  id: 60,
                  isActive: true,
                  job_title: 'Assistant Manager',
                  name: 'Aluino Gier',
                  organization: 'Zava',
                  phone: '(239) 4984954',
                  slack: 'agier1n',
                  state: 'FL'
                },
                {
                  city: 'Rockford',
                  email: 'agilliard1o@yahoo.com',
                  id: 61,
                  isActive: false,
                  job_title: 'Mechanical Systems Engineer',
                  name: 'Anstice Gilliard',
                  organization: 'Miboo',
                  phone: '(815) 5544463',
                  slack: 'agilliard1o',
                  state: 'IL'
                },
                {
                  city: 'Gary',
                  email: 'rnulty1p@miibeian.gov.cn',
                  id: 62,
                  isActive: true,
                  job_title: 'Senior Financial Analyst',
                  name: 'Ronnie Nulty',
                  organization: 'Mydeo',
                  phone: '(219) 8260787',
                  slack: 'rnulty1p',
                  state: 'IN'
                },
                {
                  city: 'Atlanta',
                  email: 'mlibero1q@sciencedirect.com',
                  id: 63,
                  isActive: true,
                  job_title: 'Librarian',
                  name: 'Michel Libero',
                  organization: 'Quimm',
                  phone: '(404) 2369096',
                  slack: 'mlibero1q',
                  state: 'GA'
                },
                {
                  city: 'Norfolk',
                  email: 'lgrishagin1r@cargocollective.com',
                  id: 64,
                  isActive: false,
                  job_title: 'Financial Analyst',
                  name: 'Linus Grishagin',
                  organization: 'Browsecat',
                  phone: '(757) 3902742',
                  slack: 'lgrishagin1r',
                  state: 'VA'
                },
                {
                  city: 'Atlanta',
                  email: 'fconnealy1s@theatlantic.com',
                  id: 65,
                  isActive: false,
                  job_title: 'Account Representative I',
                  name: 'Florella Connealy',
                  organization: 'Jaxbean',
                  phone: '(404) 4188521',
                  slack: 'fconnealy1s',
                  state: 'GA'
                },
                {
                  city: 'Birmingham',
                  email: 'mroumier1t@netvibes.com',
                  id: 66,
                  isActive: false,
                  job_title: 'GIS Technical Architect',
                  name: 'Mathew Roumier',
                  organization: 'Muxo',
                  phone: '(205) 1846614',
                  slack: 'mroumier1t',
                  state: 'AL'
                },
                {
                  city: 'Vienna',
                  email: 'fcanter1u@prlog.org',
                  id: 67,
                  isActive: false,
                  job_title: 'Marketing Manager',
                  name: 'Flora Canter',
                  organization: 'Leexo',
                  phone: '(571) 7298735',
                  slack: 'fcanter1u',
                  state: 'VA'
                },
                {
                  city: 'Saginaw',
                  email: 'cellingsworth1v@washingtonpost.com',
                  id: 68,
                  isActive: true,
                  job_title: 'Nuclear Power Engineer',
                  name: 'Carissa Ellingsworth',
                  organization: 'Yotz',
                  phone: '(989) 8757671',
                  slack: 'cellingsworth1v',
                  state: 'MI'
                },
                {
                  city: 'Baton Rouge',
                  email: 'ssloat1w@prlog.org',
                  id: 69,
                  isActive: false,
                  job_title: 'Nurse Practicioner',
                  name: 'Serena Sloat',
                  organization: 'Jabbercube',
                  phone: '(225) 3739265',
                  slack: 'ssloat1w',
                  state: 'LA'
                },
                {
                  city: 'Bridgeport',
                  email: 'jfeatherstone1x@bloglovin.com',
                  id: 70,
                  isActive: true,
                  job_title: 'Structural Analysis Engineer',
                  name: 'Juliane Featherstone',
                  organization: 'Jatri',
                  phone: '(203) 4862149',
                  slack: 'jfeatherstone1x',
                  state: 'CT'
                },
                {
                  city: 'Peoria',
                  email: 'swithringten1y@ebay.co.uk',
                  id: 71,
                  isActive: true,
                  job_title: 'Safety Technician II',
                  name: 'Selie Withringten',
                  organization: 'Flipopia',
                  phone: '(309) 1343661',
                  slack: 'swithringten1y',
                  state: 'IL'
                },
                {
                  city: 'Everett',
                  email: 'mbompas1z@oracle.com',
                  id: 72,
                  isActive: false,
                  job_title: 'Nurse Practicioner',
                  name: 'Merilyn Bompas',
                  organization: 'Wikivu',
                  phone: '(425) 3819032',
                  slack: 'mbompas1z',
                  state: 'WA'
                },
                {
                  city: 'Philadelphia',
                  email: 'rradenhurst20@prnewswire.com',
                  id: 73,
                  isActive: false,
                  job_title: 'Automation Specialist III',
                  name: 'Roth Radenhurst',
                  organization: 'Voonyx',
                  phone: '(267) 2814582',
                  slack: 'rradenhurst20',
                  state: 'PA'
                },
                {
                  city: 'Washington',
                  email: 'bgolly21@biblegateway.com',
                  id: 74,
                  isActive: true,
                  job_title: 'Software Engineer I',
                  name: 'Babita Golly',
                  organization: 'Jabbertype',
                  phone: '(202) 2822299',
                  slack: 'bgolly21',
                  state: 'DC'
                },
                {
                  city: 'Memphis',
                  email: 'gskillman22@1688.com',
                  id: 75,
                  isActive: false,
                  job_title: 'Data Coordinator',
                  name: 'Gussie Skillman',
                  organization: 'Kwideo',
                  phone: '(901) 2073329',
                  slack: 'gskillman22',
                  state: 'TN'
                },
                {
                  city: 'Anchorage',
                  email: 'cmacconnel23@bigcartel.com',
                  id: 76,
                  isActive: false,
                  job_title: 'Nurse',
                  name: 'Chrisse MacConnel',
                  organization: 'Thoughtmix',
                  phone: '(907) 2925636',
                  slack: 'cmacconnel23',
                  state: 'AK'
                },
                {
                  city: 'Memphis',
                  email: 'jbeisley24@who.int',
                  id: 77,
                  isActive: false,
                  job_title: 'Junior Executive',
                  name: 'Johan Beisley',
                  organization: 'Thoughtsphere',
                  phone: '(901) 9184548',
                  slack: 'jbeisley24',
                  state: 'TN'
                },
                {
                  city: 'Des Moines',
                  email: 'bwarton25@csmonitor.com',
                  id: 78,
                  isActive: true,
                  job_title: 'Compensation Analyst',
                  name: 'Bob Warton',
                  organization: 'Vipe',
                  phone: '(515) 7706617',
                  slack: 'bwarton25',
                  state: 'IA'
                },
                {
                  city: 'Chattanooga',
                  email: 'agolborn26@themeforest.net',
                  id: 79,
                  isActive: true,
                  job_title: 'VP Marketing',
                  name: 'Alano Golborn',
                  organization: 'Dynava',
                  phone: '(423) 4819511',
                  slack: 'agolborn26',
                  state: 'TN'
                },
                {
                  city: 'San Antonio',
                  email: 'hguys27@domainmarket.com',
                  id: 80,
                  isActive: false,
                  job_title: 'Business Systems Development Analyst',
                  name: 'Harrietta Guys',
                  organization: 'Einti',
                  phone: '(210) 1174687',
                  slack: 'hguys27',
                  state: 'TX'
                },
                {
                  city: 'Conroe',
                  email: 'cbrownett28@nps.gov',
                  id: 81,
                  isActive: false,
                  job_title: 'Software Consultant',
                  name: 'Cherlyn Brownett',
                  organization: 'Aibox',
                  phone: '(936) 7709658',
                  slack: 'cbrownett28',
                  state: 'TX'
                },
                {
                  city: 'Los Angeles',
                  email: 'zmacavaddy29@un.org',
                  id: 82,
                  isActive: true,
                  job_title: 'Legal Assistant',
                  name: 'Zebadiah MacAvaddy',
                  organization: 'Jamia',
                  phone: '(949) 2617161',
                  slack: 'zmacavaddy29',
                  state: 'CA'
                },
                {
                  city: 'Greenville',
                  email: 'ebrayshay2a@geocities.jp',
                  id: 83,
                  isActive: false,
                  job_title: 'Analyst Programmer',
                  name: 'Emanuele Brayshay',
                  organization: 'Pixonyx',
                  phone: '(864) 7951794',
                  slack: 'ebrayshay2a',
                  state: 'SC'
                },
                {
                  city: 'San Diego',
                  email: 'ecuerdall2b@nationalgeographic.com',
                  id: 84,
                  isActive: true,
                  job_title: 'Director of Sales',
                  name: 'Estrella Cuerdall',
                  organization: 'Demimbu',
                  phone: '(858) 7646075',
                  slack: 'ecuerdall2b',
                  state: 'CA'
                },
                {
                  city: 'Jacksonville',
                  email: 'clydford2c@amazon.com',
                  id: 85,
                  isActive: false,
                  job_title: 'Computer Systems Analyst III',
                  name: 'Cameron Lydford',
                  organization: 'Buzzster',
                  phone: '(904) 2346979',
                  slack: 'clydford2c',
                  state: 'FL'
                },
                {
                  city: 'Tulsa',
                  email: 'aclowes2d@pcworld.com',
                  id: 86,
                  isActive: false,
                  job_title: 'Geologist III',
                  name: 'Ardenia Clowes',
                  organization: 'Tazzy',
                  phone: '(918) 3495265',
                  slack: 'aclowes2d',
                  state: 'OK'
                },
                {
                  city: 'Birmingham',
                  email: 'ncowx2e@dmoz.org',
                  id: 87,
                  isActive: true,
                  job_title: 'Web Developer III',
                  name: 'Nonnah Cowx',
                  organization: 'Realfire',
                  phone: '(205) 8794458',
                  slack: 'ncowx2e',
                  state: 'AL'
                },
                {
                  city: 'Detroit',
                  email: 'fkelly2f@so-net.ne.jp',
                  id: 88,
                  isActive: true,
                  job_title: 'Account Representative IV',
                  name: 'Fanni Kelly',
                  organization: 'Quimba',
                  phone: '(313) 2297193',
                  slack: 'fkelly2f',
                  state: 'MI'
                },
                {
                  city: 'Omaha',
                  email: 'dkollatsch2g@craigslist.org',
                  id: 89,
                  isActive: true,
                  job_title: 'Programmer II',
                  name: 'Dagny Kollatsch',
                  organization: 'Ooba',
                  phone: '(402) 6079349',
                  slack: 'dkollatsch2g',
                  state: 'NE'
                },
                {
                  city: 'Naples',
                  email: 'vhutchinson2h@prlog.org',
                  id: 90,
                  isActive: true,
                  job_title: 'Geological Engineer',
                  name: 'Violet Hutchinson',
                  organization: 'Muxo',
                  phone: '(239) 4461150',
                  slack: 'vhutchinson2h',
                  state: 'FL'
                },
                {
                  city: 'Austin',
                  email: 'cmotto2i@g.co',
                  id: 91,
                  isActive: false,
                  job_title: 'Engineer III',
                  name: 'Crysta Motto',
                  organization: 'Skinix',
                  phone: '(512) 8734611',
                  slack: 'cmotto2i',
                  state: 'TX'
                },
                {
                  city: 'Laredo',
                  email: 'acasserley2j@census.gov',
                  id: 92,
                  isActive: true,
                  job_title: 'Accounting Assistant I',
                  name: 'Arlen Casserley',
                  organization: 'Kwinu',
                  phone: '(956) 6814502',
                  slack: 'acasserley2j',
                  state: 'TX'
                },
                {
                  city: 'Albany',
                  email: 'sivanchenkov2k@who.int',
                  id: 93,
                  isActive: false,
                  job_title: 'Payment Adjustment Coordinator',
                  name: 'Silvia Ivanchenkov',
                  organization: 'Brightbean',
                  phone: '(518) 6685405',
                  slack: 'sivanchenkov2k',
                  state: 'NY'
                },
                {
                  city: 'Brooklyn',
                  email: 'fmcmeekin2l@google.de',
                  id: 94,
                  isActive: false,
                  job_title: 'Media Manager I',
                  name: 'Flora McMeekin',
                  organization: 'Thoughtsphere',
                  phone: '(212) 3129298',
                  slack: 'fmcmeekin2l',
                  state: 'NY'
                },
                {
                  city: 'Chicago',
                  email: 'cmccaskill2m@elpais.com',
                  id: 95,
                  isActive: true,
                  job_title: 'Social Worker',
                  name: 'Clayson McCaskill',
                  organization: 'Oyoloo',
                  phone: '(773) 7194621',
                  slack: 'cmccaskill2m',
                  state: 'IL'
                },
                {
                  city: 'Gastonia',
                  email: 'rdavidwitz2n@foxnews.com',
                  id: 96,
                  isActive: true,
                  job_title: 'Senior Quality Engineer',
                  name: 'Rhianna Davidwitz',
                  organization: 'Photobean',
                  phone: '(704) 6988880',
                  slack: 'rdavidwitz2n',
                  state: 'NC'
                },
                {
                  city: 'Ogden',
                  email: 'hvirgoe2o@bandcamp.com',
                  id: 97,
                  isActive: false,
                  job_title: 'Assistant Media Planner',
                  name: 'Herb Virgoe',
                  organization: 'Camimbo',
                  phone: '(801) 5238770',
                  slack: 'hvirgoe2o',
                  state: 'UT'
                },
                {
                  city: 'Philadelphia',
                  email: 'mpond2p@google.com',
                  id: 98,
                  isActive: true,
                  job_title: 'Internal Auditor',
                  name: 'Micky Pond',
                  organization: 'Dazzlesphere',
                  phone: '(215) 9297062',
                  slack: 'mpond2p',
                  state: 'PA'
                },
                {
                  city: 'Roanoke',
                  email: 'mashlee2q@unblog.fr',
                  id: 99,
                  isActive: false,
                  job_title: 'Internal Auditor',
                  name: 'Mame Ashlee',
                  organization: 'Thoughtsphere',
                  phone: '(540) 4734532',
                  slack: 'mashlee2q',
                  state: 'VA'
                },
                {
                  city: 'Saint Paul',
                  email: 'mturnbull2r@histats.com',
                  id: 100,
                  isActive: false,
                  job_title: 'Actuary',
                  name: 'Magdalene Turnbull',
                  organization: 'Photobug',
                  phone: '(651) 8916505',
                  slack: 'mturnbull2r',
                  state: 'MN'
                },
                {
                  city: 'Fresno',
                  email: 'kmidgley2s@columbia.edu',
                  id: 101,
                  isActive: true,
                  job_title: 'Nuclear Power Engineer',
                  name: 'Karen Midgley',
                  organization: 'Tagtune',
                  phone: '(559) 3071980',
                  slack: 'kmidgley2s',
                  state: 'CA'
                },
                {
                  city: 'Denton',
                  email: 'hrobet2t@cdc.gov',
                  id: 102,
                  isActive: false,
                  job_title: 'Recruiter',
                  name: 'Hildegaard Robet',
                  organization: 'Jetwire',
                  phone: '(682) 7904322',
                  slack: 'hrobet2t',
                  state: 'TX'
                },
                {
                  city: 'Newport News',
                  email: 'mmarriot2u@yale.edu',
                  id: 103,
                  isActive: true,
                  job_title: 'Accountant II',
                  name: 'Marlon Marriot',
                  organization: 'Browsedrive',
                  phone: '(757) 1916614',
                  slack: 'mmarriot2u',
                  state: 'VA'
                },
                {
                  city: 'Lexington',
                  email: 'mbilborough2v@spotify.com',
                  id: 104,
                  isActive: true,
                  job_title: 'Automation Specialist IV',
                  name: 'Michaella Bilborough',
                  organization: 'Realblab',
                  phone: '(859) 7930674',
                  slack: 'mbilborough2v',
                  state: 'KY'
                },
                {
                  city: 'Jacksonville',
                  email: 'acaiger2w@intel.com',
                  id: 105,
                  isActive: false,
                  job_title: 'Accountant IV',
                  name: 'Ardith Caiger',
                  organization: 'Photofeed',
                  phone: '(904) 2049296',
                  slack: 'acaiger2w',
                  state: 'FL'
                },
                {
                  city: 'Sandy',
                  email: 'tfenby2x@lycos.com',
                  id: 106,
                  isActive: true,
                  job_title: 'Analog Circuit Design manager',
                  name: 'Tatiana Fenby',
                  organization: 'Oyope',
                  phone: '(801) 4806627',
                  slack: 'tfenby2x',
                  state: 'UT'
                },
                {
                  city: 'Charlotte',
                  email: 'ccoldrick2y@slate.com',
                  id: 107,
                  isActive: true,
                  job_title: 'Biostatistician III',
                  name: 'Clementina Coldrick',
                  organization: 'Yamia',
                  phone: '(704) 8960486',
                  slack: 'ccoldrick2y',
                  state: 'NC'
                },
                {
                  city: 'Portland',
                  email: 'eclougher2z@jimdo.com',
                  id: 108,
                  isActive: false,
                  job_title: 'Software Consultant',
                  name: 'Emory Clougher',
                  organization: 'Thoughtbeat',
                  phone: '(503) 4666598',
                  slack: 'eclougher2z',
                  state: 'OR'
                },
                {
                  city: 'El Paso',
                  email: 'jbaillie30@timesonline.co.uk',
                  id: 109,
                  isActive: true,
                  job_title: 'Cost Accountant',
                  name: 'Jimmy Baillie',
                  organization: 'Jabberbean',
                  phone: '(915) 7599108',
                  slack: 'jbaillie30',
                  state: 'TX'
                },
                {
                  city: 'Madison',
                  email: 'mshutt31@purevolume.com',
                  id: 110,
                  isActive: true,
                  job_title: 'Director of Sales',
                  name: 'Marta Shutt',
                  organization: 'Gabcube',
                  phone: '(608) 4673684',
                  slack: 'mshutt31',
                  state: 'WI'
                },
                {
                  city: 'Saint Louis',
                  email: 'gmant32@springer.com',
                  id: 111,
                  isActive: true,
                  job_title: 'VP Marketing',
                  name: 'Gaultiero Mant',
                  organization: 'Chatterpoint',
                  phone: '(314) 1167206',
                  slack: 'gmant32',
                  state: 'MO'
                },
                {
                  city: 'Mobile',
                  email: 'ccoolican33@mediafire.com',
                  id: 112,
                  isActive: false,
                  job_title: 'Environmental Specialist',
                  name: 'Cherrita Coolican',
                  organization: 'Cogibox',
                  phone: '(251) 5007991',
                  slack: 'ccoolican33',
                  state: 'AL'
                },
                {
                  city: 'Miami',
                  email: 'oduggleby34@zdnet.com',
                  id: 113,
                  isActive: true,
                  job_title: 'Teacher',
                  name: 'Opaline Duggleby',
                  organization: 'Twitterwire',
                  phone: '(305) 4813475',
                  slack: 'oduggleby34',
                  state: 'FL'
                },
                {
                  city: 'Jacksonville',
                  email: 'gwenham35@senate.gov',
                  id: 114,
                  isActive: true,
                  job_title: 'Research Assistant III',
                  name: 'Gare Wenham',
                  organization: 'Innotype',
                  phone: '(904) 8748811',
                  slack: 'gwenham35',
                  state: 'FL'
                },
                {
                  city: 'Fort Wayne',
                  email: 'mnorthill36@omniture.com',
                  id: 115,
                  isActive: false,
                  job_title: 'Registered Nurse',
                  name: 'Maddi Northill',
                  organization: 'Jabbersphere',
                  phone: '(260) 9122553',
                  slack: 'mnorthill36',
                  state: 'IN'
                },
                {
                  city: 'Austin',
                  email: 'acroydon37@technorati.com',
                  id: 116,
                  isActive: false,
                  job_title: 'Librarian',
                  name: 'Ailina Croydon',
                  organization: 'Photolist',
                  phone: '(512) 3659983',
                  slack: 'acroydon37',
                  state: 'TX'
                },
                {
                  city: 'Seattle',
                  email: 'abrindley38@ftc.gov',
                  id: 117,
                  isActive: false,
                  job_title: 'Business Systems Development Analyst',
                  name: 'Armand Brindley',
                  organization: 'Buzzbean',
                  phone: '(206) 5343466',
                  slack: 'abrindley38',
                  state: 'WA'
                },
                {
                  city: 'New York City',
                  email: 'kbansal39@spotify.com',
                  id: 118,
                  isActive: true,
                  job_title: 'Computer Systems Analyst III',
                  name: 'Kaile Bansal',
                  organization: 'Jaxbean',
                  phone: '(347) 2734894',
                  slack: 'kbansal39',
                  state: 'NY'
                },
                {
                  city: 'San Diego',
                  email: 'bbillingham3a@nydailynews.com',
                  id: 119,
                  isActive: true,
                  job_title: 'Pharmacist',
                  name: 'Belita Billingham',
                  organization: 'Browsebug',
                  phone: '(619) 7941850',
                  slack: 'bbillingham3a',
                  state: 'CA'
                },
                {
                  city: 'Boise',
                  email: 'rewles3b@theglobeandmail.com',
                  id: 120,
                  isActive: true,
                  job_title: 'Recruiter',
                  name: 'Ragnar Ewles',
                  organization: 'Kwinu',
                  phone: '(208) 9354386',
                  slack: 'rewles3b',
                  state: 'ID'
                },
                {
                  city: 'Clearwater',
                  email: 'ifarrants3c@pcworld.com',
                  id: 121,
                  isActive: true,
                  job_title: 'Pharmacist',
                  name: 'Irma Farrants',
                  organization: 'Youopia',
                  phone: '(727) 7496534',
                  slack: 'ifarrants3c',
                  state: 'FL'
                },
                {
                  city: 'Dayton',
                  email: 'evassar3d@163.com',
                  id: 122,
                  isActive: true,
                  job_title: 'Structural Engineer',
                  name: 'Eloisa Vassar',
                  organization: 'Brainsphere',
                  phone: '(513) 3736339',
                  slack: 'evassar3d',
                  state: 'OH'
                },
                {
                  city: 'Washington',
                  email: 'pdanett3e@loc.gov',
                  id: 123,
                  isActive: false,
                  job_title: 'Software Consultant',
                  name: 'Perkin Danett',
                  organization: 'Youspan',
                  phone: '(202) 5931616',
                  slack: 'pdanett3e',
                  state: 'DC'
                },
                {
                  city: 'Springfield',
                  email: 'dheathcote3f@seesaa.net',
                  id: 124,
                  isActive: true,
                  job_title: 'Engineer II',
                  name: 'Daria Heathcote',
                  organization: 'Brainlounge',
                  phone: '(417) 7134196',
                  slack: 'dheathcote3f',
                  state: 'MO'
                },
                {
                  city: 'Dearborn',
                  email: 'docrevan3g@live.com',
                  id: 125,
                  isActive: true,
                  job_title: 'Software Test Engineer I',
                  name: 'Dewain O\'Crevan',
                  organization: 'Tanoodle',
                  phone: '(734) 4607567',
                  slack: 'docrevan3g',
                  state: 'MI'
                },
                {
                  city: 'Youngstown',
                  email: 'rtimbs3h@adobe.com',
                  id: 126,
                  isActive: true,
                  job_title: 'Geological Engineer',
                  name: 'Ros Timbs',
                  organization: 'Yotz',
                  phone: '(330) 2032592',
                  slack: 'rtimbs3h',
                  state: 'OH'
                },
                {
                  city: 'Santa Rosa',
                  email: 'jwanden3i@arstechnica.com',
                  id: 127,
                  isActive: false,
                  job_title: 'Speech Pathologist',
                  name: 'Jeddy Wanden',
                  organization: 'Skyndu',
                  phone: '(707) 7066991',
                  slack: 'jwanden3i',
                  state: 'CA'
                },
                {
                  city: 'Galveston',
                  email: 'kpickance3j@prlog.org',
                  id: 128,
                  isActive: true,
                  job_title: 'Web Developer IV',
                  name: 'Kahaleel Pickance',
                  organization: 'Demimbu',
                  phone: '(281) 4764156',
                  slack: 'kpickance3j',
                  state: 'TX'
                },
                {
                  city: 'Miami',
                  email: 'bklimentyev3k@merriam-webster.com',
                  id: 129,
                  isActive: true,
                  job_title: 'Account Executive',
                  name: 'Bobbie Klimentyev',
                  organization: 'Rooxo',
                  phone: '(786) 5184075',
                  slack: 'bklimentyev3k',
                  state: 'FL'
                },
                {
                  city: 'New York City',
                  email: 'lgarz3l@amazon.com',
                  id: 130,
                  isActive: true,
                  job_title: 'Staff Scientist',
                  name: 'Lian Garz',
                  organization: 'Flashspan',
                  phone: '(212) 6037259',
                  slack: 'lgarz3l',
                  state: 'NY'
                },
                {
                  city: 'Bozeman',
                  email: 'mduinbleton3m@acquirethisname.com',
                  id: 131,
                  isActive: true,
                  job_title: 'Senior Financial Analyst',
                  name: 'Melva Duinbleton',
                  organization: 'Fadeo',
                  phone: '(406) 5762858',
                  slack: 'mduinbleton3m',
                  state: 'MT'
                },
                {
                  city: 'New York City',
                  email: 'ilindenbluth3n@marketwatch.com',
                  id: 132,
                  isActive: true,
                  job_title: 'Food Chemist',
                  name: 'Ira Lindenbluth',
                  organization: 'Zooveo',
                  phone: '(646) 1342353',
                  slack: 'ilindenbluth3n',
                  state: 'NY'
                },
                {
                  city: 'Lakewood',
                  email: 'sslot3o@boston.com',
                  id: 133,
                  isActive: false,
                  job_title: 'VP Product Management',
                  name: 'Skipp Slot',
                  organization: 'Skyble',
                  phone: '(253) 3196118',
                  slack: 'sslot3o',
                  state: 'WA'
                },
                {
                  city: 'New York City',
                  email: 'lmenguy3p@usnews.com',
                  id: 134,
                  isActive: false,
                  job_title: 'Programmer Analyst I',
                  name: 'Linette Menguy',
                  organization: 'Muxo',
                  phone: '(212) 8946950',
                  slack: 'lmenguy3p',
                  state: 'NY'
                },
                {
                  city: 'Honolulu',
                  email: 'lle3q@pbs.org',
                  id: 135,
                  isActive: false,
                  job_title: 'Web Developer III',
                  name: 'Larissa Le Friec',
                  organization: 'Babbleopia',
                  phone: '(808) 7032317',
                  slack: 'lle3q',
                  state: 'HI'
                },
                {
                  city: 'Albuquerque',
                  email: 'bhuthart3r@bbb.org',
                  id: 136,
                  isActive: true,
                  job_title: 'Senior Quality Engineer',
                  name: 'Bonny Huthart',
                  organization: 'Yacero',
                  phone: '(505) 8219497',
                  slack: 'bhuthart3r',
                  state: 'NM'
                },
                {
                  city: 'Washington',
                  email: 'aabela3s@cpanel.net',
                  id: 137,
                  isActive: true,
                  job_title: 'Assistant Professor',
                  name: 'Aggie Abela',
                  organization: 'Eayo',
                  phone: '(202) 4095448',
                  slack: 'aabela3s',
                  state: 'DC'
                },
                {
                  city: 'El Paso',
                  email: 'ssalliss3t@w3.org',
                  id: 138,
                  isActive: false,
                  job_title: 'Junior Executive',
                  name: 'Suzy Salliss',
                  organization: 'Photofeed',
                  phone: '(915) 5412878',
                  slack: 'ssalliss3t',
                  state: 'TX'
                },
                {
                  city: 'San Antonio',
                  email: 'ddudenie3u@squarespace.com',
                  id: 139,
                  isActive: true,
                  job_title: 'Graphic Designer',
                  name: 'Diane Dudenie',
                  organization: 'Tagtune',
                  phone: '(210) 8312810',
                  slack: 'ddudenie3u',
                  state: 'TX'
                },
                {
                  city: 'Dallas',
                  email: 'slangthorn3v@g.co',
                  id: 140,
                  isActive: true,
                  job_title: 'VP Quality Control',
                  name: 'Sascha Langthorn',
                  organization: 'Rhynoodle',
                  phone: '(469) 2668285',
                  slack: 'slangthorn3v',
                  state: 'TX'
                },
                {
                  city: 'Silver Spring',
                  email: 'mwindeatt3w@japanpost.jp',
                  id: 141,
                  isActive: true,
                  job_title: 'Software Consultant',
                  name: 'Marga Windeatt',
                  organization: 'Pixoboo',
                  phone: '(240) 6769065',
                  slack: 'mwindeatt3w',
                  state: 'MD'
                },
                {
                  city: 'Delray Beach',
                  email: 'msaltsberger3x@cnn.com',
                  id: 142,
                  isActive: true,
                  job_title: 'Automation Specialist I',
                  name: 'Marcie Saltsberger',
                  organization: 'Photobug',
                  phone: '(561) 7695951',
                  slack: 'msaltsberger3x',
                  state: 'FL'
                },
                {
                  city: 'Oakland',
                  email: 'kgerdts3y@mediafire.com',
                  id: 143,
                  isActive: false,
                  job_title: 'Assistant Professor',
                  name: 'Klara Gerdts',
                  organization: 'Yacero',
                  phone: '(510) 6295847',
                  slack: 'kgerdts3y',
                  state: 'CA'
                },
                {
                  city: 'Arlington',
                  email: 'dgravie3z@trellian.com',
                  id: 144,
                  isActive: true,
                  job_title: 'Internal Auditor',
                  name: 'Dur Gravie',
                  organization: 'Vinte',
                  phone: '(817) 7848052',
                  slack: 'dgravie3z',
                  state: 'TX'
                },
                {
                  city: 'Charleston',
                  email: 'hwesterman40@google.it',
                  id: 145,
                  isActive: true,
                  job_title: 'Research Nurse',
                  name: 'Haleigh Westerman',
                  organization: 'Abata',
                  phone: '(304) 5162272',
                  slack: 'hwesterman40',
                  state: 'WV'
                },
                {
                  city: 'Louisville',
                  email: 'sblackburn41@google.es',
                  id: 146,
                  isActive: false,
                  job_title: 'Health Coach III',
                  name: 'Sydelle Blackburn',
                  organization: 'Babblestorm',
                  phone: '(502) 2503474',
                  slack: 'sblackburn41',
                  state: 'KY'
                },
                {
                  city: 'Charleston',
                  email: 'jde42@multiply.com',
                  id: 147,
                  isActive: true,
                  job_title: 'Help Desk Operator',
                  name: 'Jaymee De Simoni',
                  organization: 'Skilith',
                  phone: '(843) 8450431',
                  slack: 'jde42',
                  state: 'SC'
                },
                {
                  city: 'Saint Louis',
                  email: 'thumbee43@sphinn.com',
                  id: 148,
                  isActive: false,
                  job_title: 'Accountant I',
                  name: 'Tandi Humbee',
                  organization: 'Feedspan',
                  phone: '(314) 7791148',
                  slack: 'thumbee43',
                  state: 'MO'
                },
                {
                  city: 'Columbus',
                  email: 'fgarnall44@ft.com',
                  id: 149,
                  isActive: true,
                  job_title: 'Recruiter',
                  name: 'Franzen Garnall',
                  organization: 'Muxo',
                  phone: '(614) 7212691',
                  slack: 'fgarnall44',
                  state: 'OH'
                },
                {
                  city: 'Charlotte',
                  email: 'zbittlestone45@cocolog-nifty.com',
                  id: 150,
                  isActive: false,
                  job_title: 'Marketing Manager',
                  name: 'Zeke Bittlestone',
                  organization: 'Edgewire',
                  phone: '(704) 2750382',
                  slack: 'zbittlestone45',
                  state: 'NC'
                },
                {
                  city: 'Des Moines',
                  email: 'ddawidowsky46@amazon.co.uk',
                  id: 151,
                  isActive: false,
                  job_title: 'Editor',
                  name: 'Drusie Dawidowsky',
                  organization: 'Jayo',
                  phone: '(515) 9243631',
                  slack: 'ddawidowsky46',
                  state: 'IA'
                },
                {
                  city: 'Beaumont',
                  email: 'bdalliwater47@instagram.com',
                  id: 152,
                  isActive: true,
                  job_title: 'Geological Engineer',
                  name: 'Bink Dalliwater',
                  organization: 'Meejo',
                  phone: '(936) 9300471',
                  slack: 'bdalliwater47',
                  state: 'TX'
                },
                {
                  city: 'Seattle',
                  email: 'thayfield48@sohu.com',
                  id: 153,
                  isActive: true,
                  job_title: 'Analyst Programmer',
                  name: 'Tomi Hayfield',
                  organization: 'Livefish',
                  phone: '(206) 6240607',
                  slack: 'thayfield48',
                  state: 'WA'
                },
                {
                  city: 'Tucson',
                  email: 'acowlishaw49@washington.edu',
                  id: 154,
                  isActive: false,
                  job_title: 'Developer IV',
                  name: 'Anson Cowlishaw',
                  organization: 'Reallinks',
                  phone: '(520) 2308185',
                  slack: 'acowlishaw49',
                  state: 'AZ'
                },
                {
                  city: 'Grand Rapids',
                  email: 'dstonnell4a@e-recht24.de',
                  id: 155,
                  isActive: true,
                  job_title: 'Senior Quality Engineer',
                  name: 'Donnajean Stonnell',
                  organization: 'Leexo',
                  phone: '(616) 2827454',
                  slack: 'dstonnell4a',
                  state: 'MI'
                },
                {
                  city: 'Raleigh',
                  email: 'cgrainger4b@reverbnation.com',
                  id: 156,
                  isActive: false,
                  job_title: 'Nurse',
                  name: 'Codee Grainger',
                  organization: 'Skinte',
                  phone: '(919) 8690666',
                  slack: 'cgrainger4b',
                  state: 'NC'
                },
                {
                  city: 'Cincinnati',
                  email: 'flathy4c@youtu.be',
                  id: 157,
                  isActive: true,
                  job_title: 'Quality Control Specialist',
                  name: 'Forrest Lathy',
                  organization: 'Topiclounge',
                  phone: '(513) 9589227',
                  slack: 'flathy4c',
                  state: 'OH'
                },
                {
                  city: 'Midland',
                  email: 'bfarley4d@usda.gov',
                  id: 158,
                  isActive: false,
                  job_title: 'Database Administrator IV',
                  name: 'Birdie Farley',
                  organization: 'Feedbug',
                  phone: '(432) 5998787',
                  slack: 'bfarley4d',
                  state: 'TX'
                },
                {
                  city: 'Las Vegas',
                  email: 'cfitzharris4e@php.net',
                  id: 159,
                  isActive: false,
                  job_title: 'Research Assistant II',
                  name: 'Carmita Fitzharris',
                  organization: 'Livepath',
                  phone: '(702) 8585179',
                  slack: 'cfitzharris4e',
                  state: 'NV'
                },
                {
                  city: 'Los Angeles',
                  email: 'smackee4f@nhs.uk',
                  id: 160,
                  isActive: true,
                  job_title: 'Data Coordinator',
                  name: 'Sherm MacKee',
                  organization: 'Vimbo',
                  phone: '(213) 1327673',
                  slack: 'smackee4f',
                  state: 'CA'
                },
                {
                  city: 'Atlanta',
                  email: 'tyare4g@shutterfly.com',
                  id: 161,
                  isActive: true,
                  job_title: 'Graphic Designer',
                  name: 'Teena Yare',
                  organization: 'Edgeblab',
                  phone: '(404) 9974862',
                  slack: 'tyare4g',
                  state: 'GA'
                },
                {
                  city: 'Memphis',
                  email: 'mdoerling4h@spotify.com',
                  id: 162,
                  isActive: true,
                  job_title: 'Project Manager',
                  name: 'Mabel Doerling',
                  organization: 'Fatz',
                  phone: '(901) 9720177',
                  slack: 'mdoerling4h',
                  state: 'TN'
                },
                {
                  city: 'Washington',
                  email: 'scoulbeck4i@furl.net',
                  id: 163,
                  isActive: true,
                  job_title: 'VP Marketing',
                  name: 'Sonja Coulbeck',
                  organization: 'Fivespan',
                  phone: '(202) 9406182',
                  slack: 'scoulbeck4i',
                  state: 'DC'
                },
                {
                  city: 'Albuquerque',
                  email: 'ikrier4j@networkadvertising.org',
                  id: 164,
                  isActive: true,
                  job_title: 'Systems Administrator III',
                  name: 'Idaline Krier',
                  organization: 'Oozz',
                  phone: '(505) 5731000',
                  slack: 'ikrier4j',
                  state: 'NM'
                },
                {
                  city: 'Grand Rapids',
                  email: 'tcollinge4k@hubpages.com',
                  id: 165,
                  isActive: true,
                  job_title: 'Business Systems Development Analyst',
                  name: 'Toddie Collinge',
                  organization: 'Kazio',
                  phone: '(616) 4225529',
                  slack: 'tcollinge4k',
                  state: 'MI'
                },
                {
                  city: 'Watertown',
                  email: 'cguilliland4l@bandcamp.com',
                  id: 166,
                  isActive: false,
                  job_title: 'Sales Associate',
                  name: 'Celinka Guilliland',
                  organization: 'Rhyzio',
                  phone: '(857) 2396287',
                  slack: 'cguilliland4l',
                  state: 'MA'
                },
                {
                  city: 'Detroit',
                  email: 'bfirebrace4m@studiopress.com',
                  id: 167,
                  isActive: false,
                  job_title: 'Senior Quality Engineer',
                  name: 'Billie Firebrace',
                  organization: 'Twitterwire',
                  phone: '(313) 8361069',
                  slack: 'bfirebrace4m',
                  state: 'MI'
                },
                {
                  city: 'Anchorage',
                  email: 'pdoberer4n@columbia.edu',
                  id: 168,
                  isActive: false,
                  job_title: 'Registered Nurse',
                  name: 'Putnam Doberer',
                  organization: 'Mydo',
                  phone: '(907) 5921887',
                  slack: 'pdoberer4n',
                  state: 'AK'
                },
                {
                  city: 'Phoenix',
                  email: 'egarter4o@rambler.ru',
                  id: 169,
                  isActive: false,
                  job_title: 'Database Administrator I',
                  name: 'Edie Garter',
                  organization: 'Devpoint',
                  phone: '(480) 6628137',
                  slack: 'egarter4o',
                  state: 'AZ'
                },
                {
                  city: 'Los Angeles',
                  email: 'gbennellick4p@booking.com',
                  id: 170,
                  isActive: false,
                  job_title: 'VP Quality Control',
                  name: 'Gae Bennellick',
                  organization: 'Topicblab',
                  phone: '(213) 7778920',
                  slack: 'gbennellick4p',
                  state: 'CA'
                },
                {
                  city: 'Charleston',
                  email: 'zdowdell4q@java.com',
                  id: 171,
                  isActive: false,
                  job_title: 'Systems Administrator III',
                  name: 'Zilvia Dowdell',
                  organization: 'Oloo',
                  phone: '(304) 2010474',
                  slack: 'zdowdell4q',
                  state: 'WV'
                },
                {
                  city: 'Fort Worth',
                  email: 'vwaith4r@dedecms.com',
                  id: 172,
                  isActive: true,
                  job_title: 'Web Developer IV',
                  name: 'Violet Waith',
                  organization: 'Flipstorm',
                  phone: '(817) 2902785',
                  slack: 'vwaith4r',
                  state: 'TX'
                },
                {
                  city: 'Lexington',
                  email: 'bwaplington4s@msn.com',
                  id: 173,
                  isActive: false,
                  job_title: 'Cost Accountant',
                  name: 'Bertie Waplington',
                  organization: 'Roodel',
                  phone: '(859) 4143406',
                  slack: 'bwaplington4s',
                  state: 'KY'
                },
                {
                  city: 'Charlotte',
                  email: 'jcapron4t@youtube.com',
                  id: 174,
                  isActive: true,
                  job_title: 'Junior Executive',
                  name: 'Julissa Capron',
                  organization: 'Teklist',
                  phone: '(704) 3743580',
                  slack: 'jcapron4t',
                  state: 'NC'
                },
                {
                  city: 'Fort Wayne',
                  email: 'tleask4u@cyberchimps.com',
                  id: 175,
                  isActive: true,
                  job_title: 'Programmer Analyst IV',
                  name: 'Tessy Leask',
                  organization: 'Yabox',
                  phone: '(260) 1766375',
                  slack: 'tleask4u',
                  state: 'IN'
                },
                {
                  city: 'Miami Beach',
                  email: 'svan4v@plala.or.jp',
                  id: 176,
                  isActive: true,
                  job_title: 'Assistant Manager',
                  name: 'Salome Van de Velde',
                  organization: 'Babblestorm',
                  phone: '(305) 5033788',
                  slack: 'svan4v',
                  state: 'FL'
                },
                {
                  city: 'Washington',
                  email: 'skeggin4w@creativecommons.org',
                  id: 177,
                  isActive: false,
                  job_title: 'Geologist III',
                  name: 'Samuel Keggin',
                  organization: 'Rhynoodle',
                  phone: '(202) 1917843',
                  slack: 'skeggin4w',
                  state: 'DC'
                },
                {
                  city: 'Dallas',
                  email: 'vlong4x@comsenz.com',
                  id: 178,
                  isActive: false,
                  job_title: 'Civil Engineer',
                  name: 'Vladimir Long',
                  organization: 'Yadel',
                  phone: '(214) 8165431',
                  slack: 'vlong4x',
                  state: 'TX'
                },
                {
                  city: 'Sacramento',
                  email: 'vbunyan4y@scribd.com',
                  id: 179,
                  isActive: true,
                  job_title: 'Software Test Engineer II',
                  name: 'Valma Bunyan',
                  organization: 'Zooveo',
                  phone: '(916) 4549907',
                  slack: 'vbunyan4y',
                  state: 'CA'
                },
                {
                  city: 'Falls Church',
                  email: 'nphillip4z@over-blog.com',
                  id: 180,
                  isActive: true,
                  job_title: 'VP Sales',
                  name: 'Nissie Phillip',
                  organization: 'Quaxo',
                  phone: '(571) 2080616',
                  slack: 'nphillip4z',
                  state: 'VA'
                },
                {
                  city: 'New York City',
                  email: 'pfrankcomb50@histats.com',
                  id: 181,
                  isActive: false,
                  job_title: 'Community Outreach Specialist',
                  name: 'Powell Frankcomb',
                  organization: 'Jaxworks',
                  phone: '(212) 2172810',
                  slack: 'pfrankcomb50',
                  state: 'NY'
                },
                {
                  city: 'Merrifield',
                  email: 'ngarrit51@hostgator.com',
                  id: 182,
                  isActive: true,
                  job_title: 'Occupational Therapist',
                  name: 'Nickie Garrit',
                  organization: 'Roodel',
                  phone: '(571) 2552111',
                  slack: 'ngarrit51',
                  state: 'VA'
                },
                {
                  city: 'Jackson',
                  email: 'mponter52@walmart.com',
                  id: 183,
                  isActive: true,
                  job_title: 'Assistant Media Planner',
                  name: 'Mirella Ponter',
                  organization: 'Tagfeed',
                  phone: '(601) 3175324',
                  slack: 'mponter52',
                  state: 'MS'
                },
                {
                  city: 'Fresno',
                  email: 'swait53@jigsy.com',
                  id: 184,
                  isActive: true,
                  job_title: 'Office Assistant I',
                  name: 'Sydney Wait',
                  organization: 'Plambee',
                  phone: '(559) 5003840',
                  slack: 'swait53',
                  state: 'CA'
                },
                {
                  city: 'Denver',
                  email: 'mmaffia54@liveinternet.ru',
                  id: 185,
                  isActive: true,
                  job_title: 'Quality Engineer',
                  name: 'Maurits Maffia',
                  organization: 'Fanoodle',
                  phone: '(303) 9243321',
                  slack: 'mmaffia54',
                  state: 'CO'
                },
                {
                  city: 'Washington',
                  email: 'abanting55@pinterest.com',
                  id: 186,
                  isActive: false,
                  job_title: 'Accountant I',
                  name: 'Artur Banting',
                  organization: 'Skipstorm',
                  phone: '(202) 6442077',
                  slack: 'abanting55',
                  state: 'DC'
                },
                {
                  city: 'Toledo',
                  email: 'fonions56@hao123.com',
                  id: 187,
                  isActive: true,
                  job_title: 'Assistant Professor',
                  name: 'Freeman Onions',
                  organization: 'Blognation',
                  phone: '(419) 4836324',
                  slack: 'fonions56',
                  state: 'OH'
                },
                {
                  city: 'Charleston',
                  email: 'gdivis57@mozilla.com',
                  id: 188,
                  isActive: false,
                  job_title: 'Safety Technician II',
                  name: 'Georgianna Divis',
                  organization: 'Buzzdog',
                  phone: '(304) 4149450',
                  slack: 'gdivis57',
                  state: 'WV'
                },
                {
                  city: 'Albany',
                  email: 'cyakov58@github.com',
                  id: 189,
                  isActive: false,
                  job_title: 'Health Coach III',
                  name: 'Caril Yakov',
                  organization: 'Rhynyx',
                  phone: '(518) 4387367',
                  slack: 'cyakov58',
                  state: 'NY'
                },
                {
                  city: 'Rochester',
                  email: 'koakey59@yahoo.com',
                  id: 190,
                  isActive: true,
                  job_title: 'Chief Design Engineer',
                  name: 'Kirstin Oakey',
                  organization: 'Jamia',
                  phone: '(585) 1081372',
                  slack: 'koakey59',
                  state: 'NY'
                },
                {
                  city: 'Lansing',
                  email: 'hquince5a@canalblog.com',
                  id: 191,
                  isActive: false,
                  job_title: 'Software Consultant',
                  name: 'Hale Quince',
                  organization: 'Fiveclub',
                  phone: '(517) 2964071',
                  slack: 'hquince5a',
                  state: 'MI'
                },
                {
                  city: 'Las Vegas',
                  email: 'edenisot5b@creativecommons.org',
                  id: 192,
                  isActive: true,
                  job_title: 'Physical Therapy Assistant',
                  name: 'Eden Denisot',
                  organization: 'Camimbo',
                  phone: '(702) 1959975',
                  slack: 'edenisot5b',
                  state: 'NV'
                },
                {
                  city: 'Worcester',
                  email: 'nmcvaugh5c@bluehost.com',
                  id: 193,
                  isActive: true,
                  job_title: 'Systems Administrator II',
                  name: 'Nahum McVaugh',
                  organization: 'Feedfish',
                  phone: '(508) 1987698',
                  slack: 'nmcvaugh5c',
                  state: 'MA'
                },
                {
                  city: 'New Orleans',
                  email: 'llyddon5d@reddit.com',
                  id: 194,
                  isActive: false,
                  job_title: 'Assistant Manager',
                  name: 'Lonnard Lyddon',
                  organization: 'Topicshots',
                  phone: '(504) 8916189',
                  slack: 'llyddon5d',
                  state: 'LA'
                },
                {
                  city: 'Albuquerque',
                  email: 'djerrard5e@surveymonkey.com',
                  id: 195,
                  isActive: false,
                  job_title: 'Nurse Practicioner',
                  name: 'Diannne Jerrard',
                  organization: 'Voolith',
                  phone: '(505) 6227689',
                  slack: 'djerrard5e',
                  state: 'NM'
                },
                {
                  city: 'Greensboro',
                  email: 'svasser5f@ocn.ne.jp',
                  id: 196,
                  isActive: true,
                  job_title: 'Nuclear Power Engineer',
                  name: 'Sandie Vasser',
                  organization: 'Youopia',
                  phone: '(336) 8668534',
                  slack: 'svasser5f',
                  state: 'NC'
                },
                {
                  city: 'Philadelphia',
                  email: 'rcheales5g@ifeng.com',
                  id: 197,
                  isActive: false,
                  job_title: 'Graphic Designer',
                  name: 'Rhiamon Cheales',
                  organization: 'Lajo',
                  phone: '(215) 9811369',
                  slack: 'rcheales5g',
                  state: 'PA'
                },
                {
                  city: 'El Paso',
                  email: 'sknowlson5h@diigo.com',
                  id: 198,
                  isActive: false,
                  job_title: 'VP Product Management',
                  name: 'Stace Knowlson',
                  organization: 'Meevee',
                  phone: '(915) 7199689',
                  slack: 'sknowlson5h',
                  state: 'TX'
                },
                {
                  city: 'Bakersfield',
                  email: 'ljoannidi5i@creativecommons.org',
                  id: 199,
                  isActive: false,
                  job_title: 'Financial Analyst',
                  name: 'Lucais Joannidi',
                  organization: 'Voomm',
                  phone: '(661) 4009593',
                  slack: 'ljoannidi5i',
                  state: 'CA'
                },
                {
                  city: 'Cleveland',
                  email: 'jfernier5j@51.la',
                  id: 200,
                  isActive: true,
                  job_title: 'GIS Technical Architect',
                  name: 'Jared Fernier',
                  organization: 'Tazz',
                  phone: '(216) 6783717',
                  slack: 'jfernier5j',
                  state: 'OH'
                },
                {
                  city: 'Sacramento',
                  email: 'jkobel5k@histats.com',
                  id: 201,
                  isActive: false,
                  job_title: 'Recruiting Manager',
                  name: 'Jonell Kobel',
                  organization: 'Brainbox',
                  phone: '(916) 3202155',
                  slack: 'jkobel5k',
                  state: 'CA'
                },
                {
                  city: 'Raleigh',
                  email: 'kcoldwell5l@usda.gov',
                  id: 202,
                  isActive: false,
                  job_title: 'Senior Financial Analyst',
                  name: 'Kylen Coldwell',
                  organization: 'Geba',
                  phone: '(919) 6569274',
                  slack: 'kcoldwell5l',
                  state: 'NC'
                }
              ]}
              enablePagination
              showColumnVisibility
            />
            <div className="mt-4 mb-10 flex justify-end">
              <Button
                color="accent"
                onPress={function Ki(){}}
              >
                
                Add Record
              </Button>
            </div>
          </div>
        </div>
        
       
          <h2 className="text-lg mb-2">Card</h2>
          <Card>
            <CardHeader>
              <div className='flex w-full items-center justify-between'>
                <h2 className="font-['Inter'] text-3xl leading-10 font-light">Header H2</h2>
                <div className='w-64'>
                  <SearchField placeholder='Search this card' />
                </div>
              </div>
            </CardHeader>
            <CardBody>
             Card content
             <QuietSelect 
                selectedKey={selectedKey} 
                placeholder='Option' 
                onSelectionChange={(selectedKey: string) => handleSelectionChange(selectedKey)}
                items={[{ id: 'Option 1', name: 'Option 1' }, { id: 'Option 2', name: 'Option 2' }]} 
              />
              <div className="w-80">
                <PhoneField
                label='Phone number'
                country={country}
                onlyCountries={['us', 'gb', 'ca', 'mx', 'au']}
                value={value}
                onCountryChange={setCountry}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
              />
              </div>
              <RangeCalendar
                aria-label="Select date range"
                value={dateRange}
                onChange={setDateRange}
              />
            </CardBody>
            <CardFooter>
              <div className='text-base font-normal'>Footer Content</div>
            </CardFooter>
          </Card>
      </div>
    </div>
  );
}