var config = {
    style: 'mapbox://styles/samf/ck5ee0dkn18rb1ilnejvx3fl0',
    accessToken: 'pk.eyJ1Ijoic2FtZiIsImEiOiJjazVlNjlmc2cwZHJrM2tvNjg5NDl3eGJlIn0.QAup_n8UvR389QNTt5UJbQ',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Migrant deaths on the US-Mexico border, 2019',
    subtitle: 'Content warning: Many of these stories contain violent descriptions.',
    byline: 'Scroll down to read more stories.',
    footer: 'Much of the data comes from the <a href="https://missingmigrants.iom.int/region/americas?region=1422" target="blank">Missing Migrants project</a>. Additional thanks to everyone who took a look and offered feedback.',
    chapters: [
        {  
            id: 'sandiego-smuggling-car',
            title: 'US Citizen Faces Smuggling Charges After Bodies Found in Bloody Trunk in San Diego',
            image: '',
            description: 'Three bodies were found in the trunk of the BMW on the 2000 block of Jamie Avenue in the Bay Terraces area at around 5 p.m. on August 11. Officers opened the trunk to find the bodies of two women and a man inside. The victims appeared to be in their early 20s or late teens but no other identifying information was known due to the conditions of the bodies, police said.<br><br><a href="https://www.nbclosangeles.com/news/local/bodies-trunk-san-diego-smuggling-blood-migrants/1964795/" target="blank">NBC Los Angeles</a>',
            location: {
                center: [-117.044433, 32.685216],
                zoom: 17,
                pitch: 20,
                bearing: 0
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'sandiego-canal',
            title: 'Border Patrol Finds Man Dead in Canal Hundreds of Feet From U.S.-Mexico Border',
            image: '',
            description: 'U.S. Border Patrol agents found a man dead inside a Calexico canal, just hundreds of feet away from the U.S.-Mexico border. A man waving his arms next to the New Brair Canal was spotted by El Centro Sector agents using the department’s Remote Video Surveillance System. Border Patrol responded to the scene near Barbara Worth Road where agents found a man pointing into the canal at another man who appeared to be unresponsive, Border Patrol said. Officials determined the two men were brothers attempting to illegally cross into the U.S. from Mexico, according to Border Patrol.<br><br><a href="https://www.nbcsandiego.com/news/local/calexico-brair-canal-border-patrol-agents-man-found-dead/136070/" target="blank">NBC San Diego</a>',
            location: {
                center: [-115.449848, 32.679881],
                zoom: 14,
                pitch: 30,
                bearing: 0,
                speed: 0.5
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
          id: 'guatemalan-lost',
          title: 'Guatemalan Woman Dies After Group gets Lost in Desert: Infrastructure Could have Prevented this Says Yuma Chief',
          image: '',
          description: 'A Guatemalan woman was found dead in the desert after she fell ill on the Barry M. Goldwater Firing Range Monday and was left behind by the group she was traveling with. Emergency services in Mexico informed the Yuma Sector Operations Center at approximately 4:38 p.m., that they had been contacted by a group of 10 illegal aliens lost somewhere in the desert. The caller stated that one of the females in the group was losing consciousness and they left her behind.<br><br><a href="https://www.cbp.gov/newsroom/local-media-release/guatemalan-woman-dies-after-group-gets-lost-desert-infrastructure-could" target="blank">US Customs and Border Protection</a>',
          location: {
              center: [-114.75745448, 32.72700319],
              zoom: 16,
              pitch: 60,
              bearing: 0,
              speed: 0.6
          },
          onChapterEnter: [],
          onChapterExit: []
      },
      {
        id: 'tucson-custody',
        title: 'CBP Statement on Death in Custody: 52-year-old Nicaraguan Man Passes Away in Tucson, AZ',
        image: '',
        description: 'A 52-year-old man from Nicaragua was pronounced deceased early this morning after he was rushed to the hospital. Border Patrol and Emergency Medical Services attempts to revive the man after he fell into medical distress were unsuccessful.  The deceased was part of a group of 36 individuals, all from Central America, that surrendered to Border Patrol agents west of Sasabe, Ariz. and were being processed at a Border Patrol facility in Tucson.<br><br><a href="https://www.cbp.gov/newsroom/speeches-and-statements/cbp-statement-death-custody-52-year-old-nicaraguan-man-passes-away" target="blank">Customs and Border Protection</a>',
        location: {
            center: [-110.9463053, 32.2427637],
            zoom: 16,
            pitch: 0,
            bearing: 0,
            speed: 0.5
        },
        onChapterEnter: [],
        onChapterExit: []
    },
    {
      id: 'elpaso-car-crash',
      title: 'El Paso Border Patrol Agents Apprehend Nine in Vehicle that Failed to Yield in New Mexico, Two Ejected Aliens Died, Driver Arrested',
      image: '',
      description: 'U.S. Border Patrol agents from the El Paso Sector responded to a report of a suspected smuggling incident Saturday, at 8 p.m. EDT, near mile marker 131 on Highway 9 in New Mexico. Agents encountered the grey minivan identified by the report, which failed to yield to emergency lights and sirens. As a result, agents deployed a controlled tire deflation device on Highway 9 at mile marker 142. The vehicle swerved away from the device, rolled over and two people were ejected. Agents immediately provided emergency care, and contacted emergency medical services and the New Mexico State Police. Border Patrol emergency medical technicians and a U.S. Coast Guard medical team assigned to the Santa Teresa Station also responded.<br><br><a href="https://www.cbp.gov/newsroom/local-media-release/el-paso-border-patrol-agents-apprehend-nine-vehicle-failed-yield-new#wcm-survey-target-id" target="blank">Customs and Border Protection</a>',
      location: {
          center: [-106.798756, 31.812809],
          zoom: 16,
          pitch: 60,
          bearing: 0,
          speed: 0.6
      },
      onChapterEnter: [],
      onChapterExit: []
  },
  {
    id: 'extreme-heat',
    title: 'Seven migrant deaths reported in extreme heat at U.S. border',
    image: '',
    description: 'Authorities in Texas reported seven migrant deaths on Monday, including those of a woman, two babies and a toddler, showing the danger of extreme summer heat as Central American families surge across the U.S.-Mexico border. The woman and three children made have been dead for days before they were found by U.S. Border Patrol near the Rio Grande in South Texas on Sunday, according to a local law enforcement official, who asked not tbe named. They are thought to have died from heat exposure and dehydration in an area about 18 miles (29 km) east of McAllen. To the west, U.S. Border Patrol agents in the Del Rio area recovered the bodies of two men on ranchland near Carrizo Springs after anonymous calls on June 19 and June 20 alerted them to lost migrants, the agency said in a statement.<br><br><a href="https://www.reuters.com/article/us-usa-immigration-death/seven-migrant-deaths-reported-in-extreme-heat-at-us-border-idUSKCN1TQ0D7" target="blank">Reuters</a>',
    location: {
        center: [ -100.632885, 28.908791],
        zoom: 15,
        pitch: 50,
        bearing: 0,
        speed: 0.5
    },
    onChapterEnter: [],
    onChapterExit: []
},
{
  id: 'under-tree',
  title: 'Dying migrant left under a tree somewhere in South Bexar County, sheriff says',
  image: '',
  description: '[Sheriffs] are looking for 33-year old Marcos Vasquez Ramirez. The family said Ramirez was walking with a group of other people through Bexar County when he suffered some kind of medical episode. The group apparently left the man under a tree somewhere in the area of Loop 1604 and Pleasanton Road, in South Bexar County. They told the family they were at a certain ranch, by name, Salazar said. Investigators say Ramirez was traveling with a group of people from Guatemala to Houston. His brother, Andres Vasquez Ramirez, told us his brother left Guatemala June 6 and crossed over to the U.S. last Friday. It was also the last day he received any communication from his brother. Andres says they were called by the coyote who smuggled his brother, saying they had left him after his medical episode.<br><br><a href="https://cbsaustin.com/news/local/dying-migrant-left-under-a-tree-somewhere-in-south-bexar-county-sheriff-says" target="blank">CBS Austin</a>',
  location: {
      center: [-98.5077704, 29.2078453],
      zoom: 17,
      pitch: 30,
      bearing: 0,
      speed: 0.6
  },
  onChapterEnter: [],
  onChapterExit: []
},
{
  id: 'the-guardian',
  title: 'A young family left El Salvador for a better life. Their tragedy encapsulates the immigration crisis',
  image: '',
  description: 'When Óscar Alberto Martínez Ramírez told his mother that he was planning to take his wife and young daughter from their home on the outskirts of the San Salvador and head north to the United States, she felt a shiver of foreboding. Twelve weeks later, Óscar and Angie Valeria drowned in each other’s arms as they attempted to cross the Rio Grande and reach US soil. A harrowing photograph of the two bodies lying in shallow water cast a harsh spotlight on the region’s migration crisis, and once again underlined the dangers facing families seeking to escape poverty, violence and corruption in Central America.<br><br><a href="https://www.theguardian.com/us-news/2019/jun/26/a-young-family-left-el-salvador-for-a-better-life-their-tragedy-focused-the-immigration-crisis" target="blank">The Guardian</a>',
  location: {
      center: [-97.5000849, 25.898448],
      zoom: 16,
      pitch: 60,
      bearing: 0,
      speed: 0.3
  },
  onChapterEnter: [],
  onChapterExit: []
},
{
  id: 'start-or-main',
  title: 'Back to the start/main map',
  image: '',
  description: '<a href="/story.html">Click here to go back to the start</a>. <br><br><a href="/index.html">Click here to go back to the main map.</a>',
  location: {
      center: [-117.044433, 32.685216],
      zoom: 6,
      pitch: 0,
      bearing: 0,
      speed: 0.8
  },
  onChapterEnter: [],
  onChapterExit: []
},
    ]
};
