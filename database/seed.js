const db  = require('./index.js');
const Listing = require('./Listing.js');

const sampleListings = [
  //TODO: Fill this out with some sample property data based on the defined Mongoose schema

  {
    title: 'Chatty Cat Tells Long Yarn',
    author: 'Tae Sung Kim',
    imageUrl: 'https://source.unsplash.com/1600x900/?cat',
    createdAt: '2017-11-14T05:57:26.037Z',
    body: `It was discovered yesterday that a stray cat found on the streets of Oakland, California by local animal shelter officials possesses the ability to talk. According to a volunteer at the animal shelter who asked to remain anonymous the cat, lovingly dubbed Chatty Catherine or Chatty Cat for short by shelter staff, remained silent at first when it was brought to the shelter. It was during a routine feeding when an overzealous volunteer engaged in baby talk prompting Chatty Cat to look up from it’s bowl of kibble and respond, “Don’t be patronizing.”

The volunteer, believing she was hallucinating from overwork, promptly took the day off and returned home. It wasn’t until multiple other volunteers experienced the same phenomenon that the shelter realized the miraculous display and became uproarious. Local scientists and veterinarians were promptly called to the scene to examine Chatty Cat to try and discern the exact cause of its ability to speak.

After thorough examinations and tests, which came up inconclusive, local news reporters were allowed to interview Chatty Cat to discern its origins and its unusual ability to talk which prompted the cat to issue the following statement:

“Okay first of all my name is not Catherine, I don’t know where they got that from because my name is Margaret. They just decided that on their own. Second I am not originally from earth. I am from a planet inhabited by cats who possess the ability of speech. I landed on your planet days ago on a goodwill mission only to be captured and renamed. My story begins 9 years ago when I was born, a young simple minded little lass. I grew up poor and with a limited future. It wasn’t until I entered grade school where I met my best friend Elizabeth that I decided to dream bigger, reach for the stars. Who knew I’d end up actually reaching it? Heh...what? Nobody. Come on, that was funny.”

After hours of mundane back story it became apparent that Chatty’s Cat’s story is far from over and unlikely to stop anytime soon. We will update the article with new information as the yarn unravels.
`,
    views: 214
  },
  {
    title: 'Corgi With Cork Shaped Birthmark Declared Adorable',
    author: 'Sandeep Gonnabathula',
    imageUrl: 'https://source.unsplash.com/1600x900/?corgi',
    createdAt: '2017-11-13T03:30:26.037Z',
    body:`A San Francisco couple who adopted a Corgi found a pleasant surprise when they went to pick up their new family member from a breeder in Antioch last week. Michael and Sarah Smith drove up to the breeder’s house where they were greeted by Joanne Doberman at the door with their bundle of joy in her arms. Upon first glance Michael and Sarah noticed nothing out of the norm and quickly took their new corgi to their San Francisco loft.

During the next three days the couple spent every waking hour meticulously videotaping their corgi doing mundane everyday dog things like eating food, sleeping, and playing with the abundance of toys they had prepared. It was during one of these video tapings that Sarah discovered a tiny spot on the back of the corgi’s head in a shape of a cork. After confirming with her boyfriend Michael, the couple began to focus their documentation on the birthmark and decided to name the dog Cork the corgi.

The couple uploaded videos of Cork the corgi online and in the span of a few days the videos of Cork have gone viral garnering millions of views on various platforms. Comments on various forums and comment sections show that millions of viewers agree that Cork is a heckin good pupper and a good boy. It’s not just online viewers that are fans of the newly celebritized dog; Local wineries have offered the couple sponsorship deals and already the couple is planning a line of Cork the corgi merchandise.

“We’re just blown away by the response,” said Sarah during our interview with the couple. “We thought we’d get a couple of views and maybe a few comments here and there but the fact that so many people are showing their love and support is amazing. It was destiny that brought Cork to us and I couldn’t be happier.”

The mayor of San Francisco released an official statement this morning declaring Cork to be “officially adorable and a heckin good boy” and has declared this coming Friday to be Cork the corgi day.
`,
    views: 501
  },
  {
    title: 'Corgi Gifted At Sploots To Teach Yoga',
    author: 'Sandeep Gonnabathula',
    imageUrl: 'https://source.unsplash.com/1600x900/?corgi',
    createdAt: '2017-11-11T01:24:26.037Z',
    body: `A hot new trend has emerged in Berkeley, California; Local yoga instructor and wellness guru Yasmine Matterson, an avid yoga enthusiast and dog lover, has come up with the idea of a yoga class led by her two year old corgi named Stretch. The hour long session consists of following the movements of Stretch as he assumes various positions and poses, most notably, the sploot.

“It just came to me one day as I was doing my daily morning yoga routine in my living room,” said Yasmine in her North Berkeley home. “I looked over and saw Stretch stretched out in a sploot and I thought, hey, that looks promising. So I joined him and tried incorporating the sploot to my yoga routine and the rest is history.”

Already the class has been booked solid for the foreseeable future with intrigued yoga practitioners from all over flocking to the see Stretch in action. When asked if this would become a permanent fixture in Yasmine’s yoga studio she replied, “I believe that the sploot is the future of yoga. I won’t be surprised if I wake up tomorrow to find yoga studios across the country incorporating it into their classes. Stretch is a visionary and I think he’s taking yoga to new heights.”

When asked on his thoughts about his popular niche offering Stretch simply replied, “Bark bark, bark bark bark, *pant*...bark.”
`,
    views: 318
  },
  {
    title: 'Hipster Owners Create Cat DJ Sensation',
    author: 'Tae Sung Kim',
    imageUrl: 'https://source.unsplash.com/1600x900/?turntable',
    createdAt: '2017-11-08T05:05:26.037Z',
    body: `A New York couple has made waves in the east coast music scene. Trent Joule and Macca Klein, residents in the neighborhood of hell's kitchen in Manhattan, are the proud owners of their cat Darby who now goes by the moniker DJ Lil Paws. The couple who collect vinyl records discovered Darby’s talent for DJing one afternoon in their tiny Manhattan apartment when Darby jumped up on the record player and proceeded to scratch the vinyl record with her claws.

“We had just gotten a brand new record player from this small shop in Brooklyn. You’ve probably never heard of them,” said Trent as he stroked his mustache. “We put on a record and were making a vegan gluten free dinner when we heard a scratching sound and ran into the living to find Darby scratching the vinyl. We would have stopped her but she was actually making some real genuine soul searching music. So instead we made some flyers for a show and she’s been touring ever since.”

DJ Lil Paws is now a mainstay of the New York party scene, playing at large venues as well as various clubs and even private parties. When asked, various people who attended DJ Lil Paws’s shows described her music as, “Confusingly weird”, “Totally unreal”, and “Like nails on a chalkboard but in the best way possible”.

DJ Lil Paws released her first album earlier this month which was well received by critics and fans alike and she is already a favorite to win the award for Best Animal DJ of the year as she is the first and only nominee in existence. Her hit single, “Hiss Hiss Meow” is also up for best DJ single of the year. When asked about her thoughts on her success and her nominations, DJ Lil Paws simply purred contently.
`,
    views: 479
  },
  {
    title: 'Owner Accuses Cat Of Having A Bad “Catitude”',
    author: 'Tae Sung Kim',
    imageUrl: 'https://source.unsplash.com/1600x900/?cat',
    createdAt: '2017-11-10T05:05:26.037Z',
    body: `A New York couple has made waves in the east coast music scene. Trent Joule and Macca Klein, residents in the neighborhood of hell's kitchen in Manhattan, are the proud owners of their cat Darby who now goes by the moniker DJ Lil Paws. The couple who collect vinyl records discovered Darby’s talent for DJing one afternoon in their tiny Manhattan apartment when Darby jumped up on the record player and proceeded to scratch the vinyl record with her claws.

“We had just gotten a brand new record player from this small shop in Brooklyn. You’ve probably never heard of them,” said Trent as he stroked his mustache. “We put on a record and were making a vegan gluten free dinner when we heard a scratching sound and ran into the living to find Darby scratching the vinyl. We would have stopped her but she was actually making some real genuine soul searching music. So instead we made some flyers for a show and she’s been touring ever since.”

DJ Lil Paws is now a mainstay of the New York party scene, playing at large venues as well as various clubs and even private parties. When asked, various people who attended DJ Lil Paws’s shows described her music as, “Confusingly weird”, “Totally unreal”, and “Like nails on a chalkboard but in the best way possible”.

DJ Lil Paws released her first album earlier this month which was well received by critics and fans alike and she is already a favorite to win the award for Best Animal DJ of the year as she is the first and only nominee in existence. Her hit single, “Hiss Hiss Meow” is also up for best DJ single of the year. When asked about her thoughts on her success and her nominations, DJ Lil Paws simply purred contently.
`,
    views: 479
  }
];

const insertSampleListings = function() {
  Listing.create(sampleListings)
    .then(() => db.disconnect());
};

insertSampleListings();