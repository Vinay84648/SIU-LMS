const fs = require('fs');
const path = require('path');

const replacements = {
  'Dr. Alan Turing': 'Dr. APJ Abdul Kalam',
  'Dr. Henry Ford': 'Dr. Vikram Sarabhai',
  'Dr. Elon Musk': 'Dr. Homi Bhabha',
  'Prof. Steve Jobs': 'Prof. C.V. Raman',
  'Dr. Sarah Kim': 'Dr. Kavita Sharma',
  'Dr. Elena Vasquez': 'Dr. Sneha Reddy',
  'Prof. Kwame Asante': 'Prof. Anoop Desai',
  'Dr. Yuki Tanaka': 'Dr. Yash Thakur',
  'Prof. Marcus Williams': 'Prof. Suresh Gopi',
  'Dr. Chen Wei': 'Dr. Arun Kumar',
  'Dr. Ana Ruiz': 'Dr. Ananya Singh',
  'Prof. James Liu': 'Prof. Ramesh Kumar',
  'Dr. David Miller': 'Dr. Devrath Menon',
  'Austin Carter': 'Arjun Kapoor',
  'Bella Thorne': 'Bhavya Trivedi',
  'Devon Miller': 'Devansh Mehta',
  'Alice Smith': 'Anjali Sharma',
  'Bob Johnson': 'Bharat Jain',
  'Charlie Brown': 'Chetan Bhagat',
  'Prof. Mark Chen': 'Prof. Manoj Desai',
  'Dr. Yuna Park': 'Dr. Kavya Iyer',
  
  // Emails
  'e.vasquez@siu.org': 's.reddy@siu.org',
  'k.asante@siu.org': 'a.desai@siu.org',
  'y.tanaka@siu.org': 'y.thakur@siu.org',
  'alice@siu.org': 'anjali@siu.org',
  'bob@siu.org': 'bharat@siu.org',
  'charlie@siu.org': 'chetan@siu.org',
  'marcus@siu.org': 'suresh@siu.org',
  'chen@siu.org': 'arun@siu.org',
  'sarah.kim@siu.org': 'kavita.sharma@siu.org',
  'ana.ruiz@siu.org': 'ananya.singh@siu.org',
  'james.liu@siu.org': 'ramesh.kumar@siu.org',
  'austin@siu.org': 'arjun@siu.org',
  'bella@siu.org': 'bhavya@siu.org',
  'devon@siu.org': 'devansh@siu.org',
  'dr.chen@siu.org': 'dr.arun@siu.org',
  'prof.chen@siu.org': 'prof.arun@siu.org'
};

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walkDir(path.join(__dirname, 'src', 'features'));
let replacedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  for (const [key, value] of Object.entries(replacements)) {
    // Escape dots for regex
    const regex = new RegExp(key.replace(/\./g, '\\.'), 'g');
    content = content.replace(regex, value);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    replacedCount++;
    console.log(`Updated ${file}`);
  }
});

console.log(`\nReplaced names in ${replacedCount} files.`);
