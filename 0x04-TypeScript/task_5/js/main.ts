interface MajorCredits {
  credits: number;
  _majorBrand: 'major';
}

interface MinorCredits {
  credits: number;
  _minorBrand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
  return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
  return subject1.credits + subject2.credits;
}

const Biology   = { credits: 3 } as MajorCredits;
const Math      = { credits: 3 } as MajorCredits;
const Reading   = { credits: 1 } as MinorCredits; 
const Economics = { credits: 1 } as MinorCredits; 

console.log(sumMajorCredits(Math, English));
console.log(sumMinorCredits(Reading, Economics));
