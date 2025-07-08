import React, { useState } from 'react';
import { 
  User, 
  Target, 
  Dumbbell, 
  Clock, 
  Home, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle,
  Play,
  Calendar,
  TrendingUp,
  Zap,
  Award,
  Activity,
  Heart,
  Star,
  ArrowRight
} from 'lucide-react';

interface UserData {
  age: number;
  weight: number;
  height: number;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  goal: 'weight_loss' | 'muscle_gain' | 'endurance';
  sessionsPerWeek: number;
  equipment: 'gym' | 'home' | 'bodyweight';
}

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  description: string;
}

interface WorkoutProgram {
  name: string;
  description: string;
  duration: string;
  weeklySchedule: DayProgram[];
}

interface DayProgram {
  day: string;
  type: string;
  exercises: Exercise[];
  focus?: string;
}

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg 
    viewBox="0 0 500 500" 
    className={className}
    fill="currentColor"
  >
    <g transform="translate(0,500) scale(0.1,-0.1)">
      <path d="M0 2500 l0 -2500 2500 0 2500 0 0 2500 0 2500 -2500 0 -2500 0 0 -2500z m2835 975 c31 -30 32 -73 5 -103 -49 -52 -130 -19 -130 52 0 69 76 101 125 51z m-281 -30 c26 -26 29 -53 8 -83 -39 -54 -150 -152 -173 -152 -32 0 -59 28 -59 63 0 24 15 44 83 108 84 80 112 93 141 64z m148 -112 c44 -39 33 -54 -255 -341 -192 -191 -279 -272 -295 -272 -28 0 -62 34 -62 62 0 16 78 101 272 295 285 285 298 295 340 256z m188 -63 c35 -35 25 -59 -62 -147 -87 -87 -114 -99 -150 -66 -37 33 -24 64 66 151 88 87 112 96 146 62z m-250 -250 c42 -42 29 -65 -107 -197 -71 -67 -135 -123 -143 -123 -31 0 -60 30 -60 63 0 27 18 49 123 154 129 129 149 141 187 103z m-425 -722 c20 -84 39 -161 41 -170 5 -15 -2 -18 -44 -18 -49 0 -50 1 -56 35 l-7 35 -77 0 c-77 0 -77 0 -100 -35 -20 -32 -27 -35 -68 -35 l-45 0 97 143 c53 78 106 154 116 170 16 22 27 27 63 27 l43 0 37 -152z m436 120 l-7 -33 -106 -3 -106 -3 -4 -29 -5 -30 95 0 c93 0 94 0 88 -22 -3 -13 -6 -29 -6 -35 0 -10 -26 -13 -95 -13 -68 0 -97 -4 -100 -12 -2 -7 -9 -39 -15 -70 l-11 -58 -45 0 c-38 0 -45 3 -40 18 3 9 19 86 37 170 l33 152 146 0 147 0 -6 -32z m139 22 c0 -11 -58 -287 -66 -312 -6 -21 -84 -26 -84 -6 0 13 58 295 65 316 5 14 85 17 85 2z m356 -12 c-3 -13 -6 -29 -6 -35 0 -9 -19 -13 -60 -13 -54 0 -60 -2 -65 -22 -3 -13 -16 -72 -29 -133 l-22 -110 -42 -3 c-30 -2 -42 1 -42 10 0 7 11 66 25 131 14 64 25 119 25 122 0 3 -25 5 -55 5 -48 0 -55 3 -55 19 0 51 2 51 172 51 l160 0 -6 -22z m-2106 -448 c0 -5 -9 -10 -20 -10 -30 0 -27 -40 3 -41 l22 -2 -22 -4 c-16 -3 -23 -11 -23 -28 0 -17 7 -25 23 -28 16 -3 13 -5 -10 -6 l-33 -1 0 58 c0 32 3 62 7 65 10 11 53 8 53 -3z m125 -42 l24 -53 0 48 c1 26 6 47 11 47 6 0 10 -27 10 -60 0 -76 -19 -80 -49 -10 -12 28 -23 50 -26 50 -2 0 -1 -22 2 -50 4 -34 2 -50 -6 -50 -12 0 -16 111 -4 123 11 12 13 9 38 -45z m189 36 c18 -18 21 -66 6 -95 -7 -12 -21 -19 -40 -19 l-30 0 0 65 c0 62 1 65 24 65 14 0 32 -7 40 -16z m172 -100 c-7 -17 -48 -18 -64 -2 -14 14 -16 108 -2 108 6 0 10 -23 10 -50 0 -37 4 -52 16 -57 22 -8 33 14 36 72 l2 50 3 -54 c2 -29 2 -60 -1 -67z m158 100 c20 -19 20 -25 2 -50 -13 -16 -13 -22 0 -41 8 -13 10 -23 4 -23 -6 0 -16 11 -22 25 -15 33 -36 32 -41 -2 -2 -16 -5 2 -6 40 -1 65 0 67 23 67 14 0 32 -7 40 -16z m149 -56 c8 -32 12 -58 7 -58 -4 0 -10 7 -14 15 -3 8 -15 15 -26 15 -11 0 -20 -7 -20 -15 0 -8 -5 -15 -11 -15 -6 0 -8 8 -5 18 3 9 8 31 12 47 10 42 25 69 33 59 5 -5 15 -35 24 -66z m133 4 l19 -47 6 60 6 60 1 -67 c2 -83 -10 -87 -43 -15 l-23 52 -4 -55 c-4 -54 -4 -54 -6 14 -2 57 0 67 12 57 7 -6 22 -33 32 -59z m189 58 c4 -6 -7 -10 -25 -10 -31 0 -31 0 -28 -47 3 -45 4 -48 31 -46 15 1 27 -2 27 -8 0 -18 -59 -10 -70 10 -15 29 -12 77 6 95 17 18 50 21 59 6z m140 0 c4 -6 -5 -10 -19 -10 -35 0 -37 -39 -3 -41 l22 -2 -22 -4 c-35 -7 -31 -50 5 -56 25 -4 25 -4 -5 -6 l-33 -1 0 65 c0 62 1 65 24 65 14 0 28 -4 31 -10z m235 0 c0 -5 -9 -10 -20 -10 -30 0 -27 -40 3 -41 l22 -2 -22 -4 c-18 -3 -23 -11 -23 -34 0 -16 -4 -29 -10 -29 -11 0 -14 113 -3 123 10 11 53 8 53 -3z m87 -87 c-2 -21 -4 -6 -4 32 0 39 2 55 4 38 2 -18 2 -50 0 -70z m153 87 c0 -5 -7 -10 -15 -10 -12 0 -15 -13 -15 -55 0 -34 -4 -55 -11 -55 -8 0 -9 17 -4 55 6 51 5 55 -14 55 -12 0 -21 5 -21 10 0 6 18 10 40 10 22 0 40 -4 40 -10z m115 -42 l24 -53 0 48 c1 26 6 47 11 47 6 0 10 -27 10 -60 0 -76 -19 -80 -49 -10 -12 28 -23 50 -26 50 -2 0 -1 -22 2 -50 4 -34 2 -50 -6 -50 -12 0 -16 111 -4 123 11 12 13 9 38 -45z m185 42 c0 -5 -9 -10 -20 -10 -30 0 -27 -40 3 -41 l22 -2 -22 -4 c-16 -3 -23 -11 -23 -28 0 -17 7 -25 23 -28 16 -3 13 -5 -10 -6 l-33 -1 0 58 c0 32 3 62 7 65 10 11 53 8 53 -3z m135 0 c4 -6 -5 -10 -19 -10 -34 0 -34 -27 -1 -42 20 -9 25 -18 23 -37 -2 -21 -9 -27 -35 -29 -19 -2 -33 1 -33 8 0 6 10 8 24 4 37 -9 41 21 6 46 -17 12 -30 27 -30 34 0 29 51 49 65 26z m140 0 c4 -6 -5 -10 -19 -10 -34 0 -34 -27 -1 -42 20 -9 25 -18 23 -37 -2 -21 -9 -27 -35 -29 -19 -2 -33 1 -33 8 0 6 10 8 24 4 37 -9 41 21 6 46 -17 12 -30 27 -30 34 0 29 51 49 65 26z m226 -6 c10 -12 10 -20 1 -34 -13 -22 -2 -33 25 -24 14 6 16 4 6 -6 -8 -9 -9 -19 -2 -32 6 -12 6 -18 -1 -18 -5 0 -10 5 -10 12 0 9 -3 9 -12 0 -32 -32 -88 3 -66 41 5 10 7 25 4 34 -7 18 10 43 29 43 7 0 18 -7 26 -16z m206 -81 c-2 -21 -4 -6 -4 32 0 39 2 55 4 38 2 -18 2 -50 0 -70z m146 25 c8 -32 12 -58 7 -58 -4 0 -10 7 -14 15 -3 8 -15 15 -26 15 -11 0 -20 -7 -20 -15 0 -8 -5 -15 -11 -15 -6 0 -8 8 -5 18 3 9 8 31 12 47 10 42 25 69 33 59 5 -5 15 -35 24 -66z m-1542 -81 c-8 -8 -11 -5 -11 9 0 27 14 41 18 19 2 -9 -1 -22 -7 -28z"/>
      <path d="M2077 2307 c-15 -25 -27 -48 -27 -51 0 -3 18 -6 40 -6 l41 0 -7 38 c-12 65 -19 68 -47 19z"/>
      <path d="M1302 1923 c3 -40 6 -48 23 -48 17 0 20 8 23 48 3 45 2 47 -23 47 -25 0 -26 -2 -23 -47z"/>
      <path d="M1643 1973 c-7 -3 -13 -16 -13 -30 0 -20 4 -24 23 -21 13 2 23 11 25 24 3 22 -13 34 -35 27z"/>
      <path d="M1796 1942 c-8 -24 -3 -37 12 -31 4 2 5 15 2 29 l-6 25 -8 -23z"/>
      <path d="M3530 1955 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0 -15 -7 -15 -15z"/>
      <path d="M3524 1905 c-7 -18 3 -35 21 -35 21 0 28 19 15 35 -16 19 -29 19 -36 0z"/>
      <path d="M3886 1942 c-8 -24 -3 -37 12 -31 4 2 5 15 2 29 l-6 25 -8 -23z"/>
    </g>
  </svg>
);
const FitnessCoach: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    age: 25,
    weight: 70,
    height: 175,
    fitnessLevel: 'beginner',
    goal: 'weight_loss',
    sessionsPerWeek: 3,
    equipment: 'gym'
  });
  const [program, setProgram] = useState<WorkoutProgram | null>(null);

  const restartProgram = () => {
    setStep(0);
    setProgram(null);
    setUserData({
      age: 25,
      weight: 70,
      height: 175,
      fitnessLevel: 'beginner',
      goal: 'weight_loss',
      sessionsPerWeek: 3,
      equipment: 'gym'
    });
  };

  const steps = [
    { title: 'Informations personnelles', icon: User, color: 'from-blue-500 to-cyan-500' },
    { title: 'Objectifs', icon: Target, color: 'from-purple-500 to-pink-500' },
    { title: 'Disponibilité', icon: Clock, color: 'from-green-500 to-emerald-500' },
    { title: 'Équipement', icon: Dumbbell, color: 'from-orange-500 to-red-500' },
    { title: 'Votre programme', icon: CheckCircle, color: 'from-indigo-500 to-purple-500' }
  ];

  const calculateProgramLevel = (): number => {
    const fitnessLevelScore = {
      beginner: 1,
      intermediate: 2,
      advanced: 3
    }[userData.fitnessLevel];

    const goalScore = {
      weight_loss: 2,
      muscle_gain: 3,
      endurance: 2
    }[userData.goal];

    const availabilityScore = userData.sessionsPerWeek <= 2 ? 1 : 
                             userData.sessionsPerWeek <= 3 ? 2 : 3;

    return fitnessLevelScore + goalScore + availabilityScore;
  };

  const generateProgram = (): WorkoutProgram => {
    const level = calculateProgramLevel();
    const { goal, equipment, sessionsPerWeek } = userData;

    const programs = {
      beginner: {
        name: 'Programme Débutant',
        description: 'Un programme progressif pour construire les bases de votre forme physique',
        duration: '45 minutes',
        weeklySchedule: getBeginnerWeeklySchedule(goal, equipment, sessionsPerWeek)
      },
      intermediate: {
        name: 'Programme Intermédiaire',
        description: 'Développez votre force et votre endurance avec des exercices plus complexes',
        duration: '60 minutes',
        weeklySchedule: getIntermediateWeeklySchedule(goal, equipment, sessionsPerWeek)
      },
      advanced: {
        name: 'Programme Avancé',
        description: 'Poussez vos limites avec un entraînement intensif et varié',
        duration: '75 minutes',
        weeklySchedule: getAdvancedWeeklySchedule(goal, equipment, sessionsPerWeek)
      }
    };

    if (level <= 3) return programs.beginner;
    if (level <= 6) return programs.intermediate;
    return programs.advanced;
  };

  const getBeginnerWeeklySchedule = (goal: string, equipment: string, sessions: number): DayProgram[] => {
    const baseWorkout = [
      { name: 'Échauffement cardio', sets: 1, reps: '10 minutes', rest: '1 min', description: 'Marche rapide ou vélo stationnaire' },
      { name: 'Squats', sets: 3, reps: '8-12', rest: '60s', description: 'Mouvement de base pour les jambes' },
      { name: 'Pompes (genoux si nécessaire)', sets: 3, reps: '5-10', rest: '60s', description: 'Renforcement du haut du corps' },
      { name: 'Planche', sets: 3, reps: '20-30s', rest: '45s', description: 'Renforcement du core' },
      { name: 'Marche/Étirements', sets: 1, reps: '10 minutes', rest: '-', description: 'Récupération active' }
    ];

    const cardioWorkout = [
      { name: 'Échauffement', sets: 1, reps: '5 minutes', rest: '1 min', description: 'Préparation du corps' },
      { name: 'Marche rapide', sets: 1, reps: '20-30 minutes', rest: '-', description: 'Cardio modéré' },
      { name: 'Étirements', sets: 1, reps: '10 minutes', rest: '-', description: 'Récupération et flexibilité' }
    ];

    if (sessions === 2) {
      return [
        { day: 'Lundi', type: 'Entraînement complet', exercises: baseWorkout, focus: 'Corps entier' },
        { day: 'Mardi', type: 'Repos', exercises: [], focus: 'Récupération' },
        { day: 'Mercredi', type: 'Repos', exercises: [], focus: 'Récupération' },
        { day: 'Jeudi', type: 'Entraînement complet', exercises: baseWorkout, focus: 'Corps entier' },
        { day: 'Vendredi', type: 'Repos', exercises: [], focus: 'Récupération' },
        { day: 'Samedi', type: 'Repos', exercises: [], focus: 'Récupération' },
        { day: 'Dimanche', type: 'Repos', exercises: [], focus: 'Récupération' }
      ];
    } else if (sessions === 3) {
      return [
        { day: 'Lundi', type: 'Entraînement complet', exercises: baseWorkout, focus: 'Corps entier' },
        { day: 'Mardi', type: 'Repos', exercises: [], focus: 'Récupération' },
        { day: 'Mercredi', type: 'Cardio léger', exercises: cardioWorkout, focus: 'Endurance' },
        { day: 'Jeudi', type: 'Repos', exercises: [], focus: 'Récupération' },
        { day: 'Vendredi', type: 'Entraînement complet', exercises: baseWorkout, focus: 'Corps entier' },
        { day: 'Samedi', type: 'Repos', exercises: [], focus: 'Récupération' },
        { day: 'Dimanche', type: 'Repos', exercises: [], focus: 'Récupération' }
      ];
    } else {
      return [
        { day: 'Lundi', type: 'Entraînement complet', exercises: baseWorkout, focus: 'Corps entier' },
        { day: 'Mardi', type: 'Cardio léger', exercises: cardioWorkout, focus: 'Endurance' },
        { day: 'Mercredi', type: 'Repos', exercises: [], focus: 'Récupération' },
        { day: 'Jeudi', type: 'Entraînement complet', exercises: baseWorkout, focus: 'Corps entier' },
        { day: 'Vendredi', type: 'Cardio léger', exercises: cardioWorkout, focus: 'Endurance' },
        { day: 'Samedi', type: 'Entraînement complet', exercises: baseWorkout, focus: 'Corps entier' },
        { day: 'Dimanche', type: 'Repos', exercises: [], focus: 'Récupération' }
      ];
    }
  };

  const getIntermediateWeeklySchedule = (goal: string, equipment: string, sessions: number): DayProgram[] => {
    const baseExercises = [
      { name: 'Échauffement dynamique', sets: 1, reps: '10 minutes', rest: '1 min', description: 'Mouvements articulaires et cardio léger' },
      { name: 'Squats avec poids', sets: 4, reps: '10-15', rest: '90s', description: 'Progression avec charge' },
      { name: 'Pompes diamant', sets: 3, reps: '8-12', rest: '60s', description: 'Variant plus difficile' },
      { name: 'Tractions assistées', sets: 3, reps: '5-8', rest: '90s', description: 'Dos et biceps' },
      { name: 'Planche latérale', sets: 3, reps: '30-45s chaque côté', rest: '45s', description: 'Core avancé' },
      { name: 'Étirements complets', sets: 1, reps: '10 minutes', rest: '-', description: 'Récupération' }
    ];

    const upperBody = [
      { name: 'Échauffement', sets: 1, reps: '8 minutes', rest: '1 min', description: 'Préparation haut du corps' },
      { name: 'Pompes variées', sets: 4, reps: '10-15', rest: '60s', description: 'Différents angles' },
      { name: 'Tractions', sets: 3, reps: '6-10', rest: '90s', description: 'Dos et biceps' },
      { name: 'Dips', sets: 3, reps: '8-12', rest: '60s', description: 'Triceps et pectoraux' },
      { name: 'Planche variations', sets: 3, reps: '45s', rest: '45s', description: 'Core et stabilité' }
    ];

    const lowerBody = [
      { name: 'Échauffement', sets: 1, reps: '8 minutes', rest: '1 min', description: 'Préparation bas du corps' },
      { name: 'Squats bulgares', sets: 4, reps: '10-12 par jambe', rest: '90s', description: 'Jambes unilatérales' },
      { name: 'Fentes marchées', sets: 3, reps: '12-15 par jambe', rest: '60s', description: 'Dynamique' },
      { name: 'Relevés de mollets', sets: 3, reps: '15-20', rest: '45s', description: 'Mollets' },
      { name: 'Glute bridge', sets: 3, reps: '15-20', rest: '45s', description: 'Fessiers' }
    ];

    const cardio = [
      { name: 'Échauffement', sets: 1, reps: '5 minutes', rest: '1 min', description: 'Préparation cardio' },
      { name: 'Intervals', sets: 6, reps: '1 min effort / 1 min repos', rest: '2 min', description: 'Haute intensité' },
      { name: 'Récupération', sets: 1, reps: '10 minutes', rest: '-', description: 'Retour au calme' }
    ];

    if (sessions === 3) {
      return [
        { day: 'Lundi', type: 'Corps entier', exercises: baseExercises, focus: 'Complet' },
        { day: 'Mardi', type: 'Repos', exercises: [], focus: 'Récupération' },
        { day: 'Mercredi', type: 'Cardio', exercises: cardio, focus: 'Endurance' },
        { day: 'Jeudi', type: 'Repos', exercises: [], focus: 'Récupération' },
        { day: 'Vendredi', type: 'Corps entier', exercises: baseExercises, focus: 'Complet' },
        { day: 'Samedi', type: 'Repos', exercises: [], focus: 'Récupération' },
        { day: 'Dimanche', type: 'Repos', exercises: [], focus: 'Récupération' }
      ];
    } else {
      return [
        { day: 'Lundi', type: 'Haut du corps', exercises: upperBody, focus: 'Torse et bras' },
        { day: 'Mardi', type: 'Cardio', exercises: cardio, focus: 'Endurance' },
        { day: 'Mercredi', type: 'Repos', exercises: [], focus: 'Récupération' },
        { day: 'Jeudi', type: 'Bas du corps', exercises: lowerBody, focus: 'Jambes et fessiers' },
        { day: 'Vendredi', type: 'Corps entier', exercises: baseExercises, focus: 'Complet' },
        { day: 'Samedi', type: 'Cardio léger', exercises: cardio, focus: 'Récupération active' },
        { day: 'Dimanche', type: 'Repos', exercises: [], focus: 'Récupération' }
      ];
    }
  };

  const getAdvancedWeeklySchedule = (goal: string, equipment: string, sessions: number): DayProgram[] => {
    const baseExercises = [
      { name: 'Échauffement complet', sets: 1, reps: '15 minutes', rest: '2 min', description: 'Préparation complète du corps' },
      { name: 'Squats bulgares', sets: 4, reps: '12-15 par jambe', rest: '90s', description: 'Unilateral leg strength' },
      { name: 'Pompes archer', sets: 3, reps: '6-10 par côté', rest: '90s', description: 'Variant asymétrique' },
      { name: 'Tractions lestées', sets: 4, reps: '6-10', rest: '2 min', description: 'Progression avec poids' },
      { name: 'Planche avec variations', sets: 4, reps: '45-60s', rest: '60s', description: 'Core dynamique' },
      { name: 'Burpees avec traction', sets: 4, reps: '8-12', rest: '90s', description: 'Exercice complet' },
      { name: 'Récupération active', sets: 1, reps: '15 minutes', rest: '-', description: 'Étirements et relaxation' }
    ];

    const strength = [
      { name: 'Échauffement spécifique', sets: 1, reps: '12 minutes', rest: '2 min', description: 'Préparation force' },
      { name: 'Squats lourds', sets: 5, reps: '5-8', rest: '3 min', description: 'Force maximale' },
      { name: 'Développé couché', sets: 5, reps: '5-8', rest: '3 min', description: 'Force poussée' },
      { name: 'Soulevé de terre', sets: 4, reps: '6-8', rest: '3 min', description: 'Force totale' },
      { name: 'Tractions lestées', sets: 4, reps: '6-10', rest: '2 min', description: 'Force tirage' }
    ];

    const hiit = [
      { name: 'Échauffement intensif', sets: 1, reps: '10 minutes', rest: '2 min', description: 'Préparation HIIT' },
      { name: 'Sprint intervals', sets: 8, reps: '30s sprint / 30s repos', rest: '3 min', description: 'Cardio haute intensité' },
      { name: 'Circuit métabolique', sets: 4, reps: '45s travail / 15s repos', rest: '2 min', description: 'Enchaînement intense' },
      { name: 'Récupération', sets: 1, reps: '15 minutes', rest: '-', description: 'Retour au calme' }
    ];

    const power = [
      { name: 'Échauffement explosif', sets: 1, reps: '12 minutes', rest: '2 min', description: 'Préparation puissance' },
      { name: 'Jump squats', sets: 5, reps: '6-8', rest: '2 min', description: 'Puissance jambes' },
      { name: 'Pompes claquées', sets: 4, reps: '5-8', rest: '90s', description: 'Puissance bras' },
      { name: 'Box jumps', sets: 4, reps: '8-10', rest: '2 min', description: 'Pliométrie' },
      { name: 'Medicine ball slams', sets: 4, reps: '10-12', rest: '90s', description: 'Puissance totale' }
    ];

    return [
      { day: 'Lundi', type: 'Force', exercises: strength, focus: 'Puissance maximale' },
      { day: 'Mardi', type: 'HIIT', exercises: hiit, focus: 'Cardio intense' },
      { day: 'Mercredi', type: 'Repos actif', exercises: [], focus: 'Récupération' },
      { day: 'Jeudi', type: 'Puissance', exercises: power, focus: 'Explosivité' },
      { day: 'Vendredi', type: 'Corps entier', exercises: baseExercises, focus: 'Complet' },
      { day: 'Samedi', type: 'HIIT', exercises: hiit, focus: 'Conditionnement' },
      { day: 'Dimanche', type: 'Repos', exercises: [], focus: 'Récupération complète' }
    ];
  };

  const getDayColor = (type: string): string => {
    switch (type.toLowerCase()) {
      case 'repos':
      case 'repos actif':
        return 'bg-gradient-to-br from-slate-50 to-gray-100 text-slate-600 border-slate-200';
      case 'cardio':
      case 'cardio léger':
      case 'hiit':
        return 'bg-gradient-to-br from-red-50 to-pink-100 text-red-700 border-red-200';
      case 'force':
      case 'puissance':
        return 'bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-700 border-blue-200';
      case 'haut du corps':
      case 'bas du corps':
        return 'bg-gradient-to-br from-green-50 to-emerald-100 text-green-700 border-green-200';
      default:
        return 'bg-gradient-to-br from-purple-50 to-violet-100 text-purple-700 border-purple-200';
    }
  };

  const getRestDayActivity = (type: string): string => {
    if (type === 'Repos actif') {
      return 'Marche légère, étirements ou yoga (20-30 minutes)';
    }
    return 'Repos complet - récupération et hydratation';
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      if (step === steps.length - 2) {
        setIsGenerating(true);
        // Simulate program generation delay
        setTimeout(() => {
          setProgram(generateProgram());
          setIsGenerating(false);
          setStep(step + 1);
        }, 2000);
      } else {
        setStep(step + 1);
      }
    }
  };

  const handleNextImmediate = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const updateUserData = (field: keyof UserData, value: any) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Parlez-nous de vous</h2>
              <p className="text-gray-600 text-lg max-w-md mx-auto">Ces informations nous aident à personnaliser votre programme d'entraînement</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Âge</label>
                <input
                  type="number"
                  value={userData.age}
                  onChange={(e) => updateUserData('age', parseInt(e.target.value))}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg font-medium"
                  min="16"
                  max="80"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Poids (kg)</label>
                  <input
                    type="number"
                    value={userData.weight}
                    onChange={(e) => updateUserData('weight', parseInt(e.target.value))}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg font-medium"
                    min="40"
                    max="200"
                  />
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Taille (cm)</label>
                  <input
                    type="number"
                    value={userData.height}
                    onChange={(e) => updateUserData('height', parseInt(e.target.value))}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg font-medium"
                    min="140"
                    max="220"
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <label className="block text-sm font-semibold text-gray-700 mb-4">Niveau de forme actuel</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { value: 'beginner', label: 'Débutant', desc: 'Peu ou pas d\'expérience', icon: Star, color: 'from-green-400 to-emerald-500' },
                    { value: 'intermediate', label: 'Intermédiaire', desc: 'Quelques mois d\'expérience', icon: Award, color: 'from-yellow-400 to-orange-500' },
                    { value: 'advanced', label: 'Avancé', desc: 'Plus d\'un an d\'expérience', icon: Zap, color: 'from-red-400 to-pink-500' }
                  ].map((level) => (
                    <button
                      key={level.value}
                      onClick={() => updateUserData('fitnessLevel', level.value)}
                      className={`group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                        userData.fitnessLevel === level.value
                          ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg'
                          : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-md'
                      }`}
                    >
                      <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-3 bg-gradient-to-br ${level.color} shadow-lg`}>
                        <level.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="font-bold text-base sm:text-lg text-gray-800">{level.label}</div>
                      <div className="text-xs sm:text-sm text-gray-600 mt-1">{level.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Quel est votre objectif ?</h2>
              <p className="text-gray-600 text-lg max-w-md mx-auto">Nous adapterons votre programme selon vos priorités</p>
            </div>
            
            <div className="space-y-4">
              {[
                { value: 'weight_loss', label: 'Perte de poids', desc: 'Brûler des calories et perdre du gras', icon: TrendingUp, color: 'from-red-400 to-pink-500' },
                { value: 'muscle_gain', label: 'Prise de masse', desc: 'Développer la masse musculaire', icon: Dumbbell, color: 'from-blue-400 to-indigo-500' },
                { value: 'endurance', label: 'Endurance', desc: 'Améliorer la condition physique', icon: Heart, color: 'from-green-400 to-emerald-500' }
              ].map((goal) => (
                <button
                  key={goal.value}
                  onClick={() => updateUserData('goal', goal.value)}
                  className={`group w-full p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 flex items-center space-x-4 sm:space-x-6 hover:scale-[1.02] ${
                    userData.goal === goal.value
                      ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-100 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-md'
                  }`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${goal.color} flex items-center justify-center shadow-lg`}>
                    <goal.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-lg sm:text-xl text-gray-800">{goal.label}</div>
                    <div className="text-sm sm:text-base text-gray-600 mt-1">{goal.desc}</div>
                  </div>
                  <ArrowRight className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                    userData.goal === goal.value ? 'text-purple-600 translate-x-1' : 'text-gray-400 group-hover:translate-x-1'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Votre disponibilité</h2>
              <p className="text-gray-600 text-lg max-w-md mx-auto">Combien de fois pouvez-vous vous entraîner par semaine ?</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <label className="block text-sm font-semibold text-gray-700 mb-6">Séances par semaine</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[2, 3, 4, 5].map((sessions) => (
                    <button
                      key={sessions}
                      onClick={() => updateUserData('sessionsPerWeek', sessions)}
                      className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                        userData.sessionsPerWeek === sessions
                          ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-100 shadow-lg'
                          : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-md'
                      }`}
                    >
                      <div className="font-bold text-3xl text-gray-800 mb-2">{sessions}</div>
                      <div className="text-sm text-gray-600">séances</div>
                      {userData.sessionsPerWeek === sessions && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl border border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-blue-800 text-lg">Recommandation</span>
                </div>
                <p className="text-blue-700">
                  {userData.sessionsPerWeek <= 2 
                    ? "Parfait pour débuter en douceur et créer une routine"
                    : userData.sessionsPerWeek <= 3
                    ? "Idéal pour un équilibre optimal entre vie et sport"
                    : "Excellent pour des résultats rapides et une transformation visible"}
                </p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-4 shadow-lg">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Votre équipement</h2>
              <p className="text-gray-600 text-lg max-w-md mx-auto">Quel équipement avez-vous à disposition ?</p>
            </div>
            
            <div className="space-y-4">
              {[
                { value: 'gym', label: 'Salle de sport', desc: 'Accès complet aux machines et poids', icon: Dumbbell, color: 'from-purple-400 to-indigo-500' },
                { value: 'home', label: 'Matériel à domicile', desc: 'Haltères, élastiques, tapis', icon: Home, color: 'from-blue-400 to-cyan-500' },
                { value: 'bodyweight', label: 'Sans matériel', desc: 'Exercices au poids du corps uniquement', icon: Activity, color: 'from-green-400 to-emerald-500' }
              ].map((equipment) => (
                <button
                  key={equipment.value}
                  onClick={() => updateUserData('equipment', equipment.value)}
                  className={`group w-full p-6 rounded-2xl border-2 transition-all duration-300 flex items-center space-x-6 hover:scale-[1.02] ${
                    userData.equipment === equipment.value
                      ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-red-100 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-md'
                  }`}
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${equipment.color} flex items-center justify-center shadow-lg`}>
                    <equipment.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-xl text-gray-800">{equipment.label}</div>
                    <div className="text-gray-600 mt-1">{equipment.desc}</div>
                  </div>
                  <ArrowRight className={`w-6 h-6 transition-all duration-300 ${
                    userData.equipment === equipment.value ? 'text-orange-600 translate-x-1' : 'text-gray-400 group-hover:translate-x-1'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            {isGenerating && (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl mb-6 shadow-2xl animate-pulse">
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Génération de votre programme...</h2>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  Nous analysons vos données pour créer le programme parfait pour vous
                </p>
                <div className="mt-8 flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            )}
            
            {program && (
              <div className="flex justify-end mb-6">
                <button
                  onClick={restartProgram}
                  className="group flex items-center space-x-3 px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200"
                >
                  <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Nouveau Programme</span>
                </button>
              </div>
            )}
            
            {!isGenerating && (
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mb-4 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Votre programme personnalisé</h2>
                <p className="text-gray-600 text-lg max-w-md mx-auto">Prêt à commencer votre transformation</p>
              </div>
            )}
            
            {program && !isGenerating && (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-8 rounded-3xl shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                      <p className="text-indigo-100 text-lg">{program.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-8 text-indigo-100">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">{program.duration} par séance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">{userData.sessionsPerWeek} fois par semaine</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-5 h-5" />
                      <span className="font-semibold">Niveau {userData.fitnessLevel}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-2xl text-gray-800">Planning hebdomadaire</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {program.weeklySchedule.map((day, index) => (
                      <div key={index} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105">
                        <div className={`p-4 ${getDayColor(day.type)} border-b-2`}>
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-bold text-lg">{day.day}</h5>
                            <span className="text-xs px-3 py-1 bg-white bg-opacity-70 rounded-full font-semibold">
                              {day.type}
                            </span>
                          </div>
                          <p className="text-sm opacity-90 font-medium">{day.focus}</p>
                        </div>
                        
                        <div className="p-4">
                          {day.exercises.length === 0 ? (
                            <div className="text-center py-4">
                              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Heart className="w-6 h-6 text-gray-400" />
                              </div>
                              <p className="text-sm text-gray-500 font-medium">
                                {getRestDayActivity(day.type)}
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              {day.exercises.slice(0, 3).map((exercise, exerciseIndex) => (
                                <div key={exerciseIndex} className="bg-gray-50 rounded-xl p-3">
                                  <div className="font-semibold text-gray-800 text-sm mb-1">{exercise.name}</div>
                                  <div className="text-xs text-gray-600">
                                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
                                      {exercise.sets} × {exercise.reps}
                                    </span>
                                  </div>
                                </div>
                              ))}
                              {day.exercises.length > 3 && (
                                <div className="text-center">
                                  <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                                    +{day.exercises.length - 3} autres exercices
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-gray-800">Détail des exercices</h4>
                        <p className="text-gray-600">Exemple de séance complète de votre programme</p>
                      </div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {program.weeklySchedule.find(day => day.exercises.length > 0)?.exercises.map((exercise, index) => (
                      <div key={index} className="p-6 hover:bg-gray-50 transition-colors group">
                        <div className="flex justify-between items-start mb-3">
                          <h5 className="font-bold text-lg text-gray-800 group-hover:text-purple-600 transition-colors">{exercise.name}</h5>
                          <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full font-semibold">#{index + 1}</span>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{exercise.description}</p>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-xl">
                            <span className="font-semibold text-blue-700">Séries:</span>
                            <span className="text-blue-600 font-bold">{exercise.sets}</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-xl">
                            <span className="font-semibold text-green-700">Répétitions:</span>
                            <span className="text-green-600 font-bold">{exercise.reps}</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-xl">
                            <span className="font-semibold text-orange-700">Repos:</span>
                            <span className="text-orange-600 font-bold">{exercise.rest}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-3xl border border-green-200">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-green-800 text-lg sm:text-xl mb-2">Conseils pour réussir</h5>
                      <ul className="text-green-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Respectez les jours de repos pour une récupération optimale</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Hydratez-vous bien avant, pendant et après l'entraînement</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Progressez graduellement en augmentant l'intensité chaque semaine</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Écoutez votre corps et adaptez si nécessaire</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl mb-6 shadow-2xl">
              <Logo className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AFit
            </h1>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
              Obtenez un programme d'entraînement personnalisé et professionnel en quelques minutes
            </p>
          </div>
          
          {/* Enhanced Progress Bar */}
          <div className="mb-8 lg:mb-12">
            <div className="flex justify-center items-center mb-6 px-2 sm:px-4">
              <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto max-w-full">
              {steps.map((stepInfo, index) => (
                <div key={index} className="flex items-center flex-shrink-0 min-w-0">
                  <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    index <= step 
                      ? `bg-gradient-to-br ${stepInfo.color} shadow-lg scale-110` 
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    <stepInfo.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    {index <= step && (
                      <div className="absolute inset-0 rounded-2xl bg-white bg-opacity-20 animate-pulse"></div>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-4 sm:w-6 lg:w-8 h-2 rounded-full transition-all duration-500 ${
                      index < step 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-md' 
                        : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
              </div>
            </div>
            <div className="text-center">
              <span className="text-sm sm:text-base text-gray-600 font-semibold bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">
                {steps[step].title} • Étape {step + 1} sur {steps.length}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-12 border border-gray-100">
            {renderStep()}
            
            {/* Enhanced Navigation */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-8 sm:mt-12">
              <button
                onClick={handlePrevious}
                disabled={step === 0 || isGenerating}
                className={`group flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 order-2 sm:order-1 text-sm sm:text-base ${
                  step === 0 || isGenerating
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-lg hover:scale-105'
                }`}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-semibold">Précédent</span>
              </button>
              
              <button
                onClick={handleNext}
                disabled={step === steps.length - 1 || isGenerating}
                className={`group flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 order-1 sm:order-2 text-sm sm:text-base ${
                  step === steps.length - 1 || isGenerating
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl hover:scale-105'
                }`}
              >
                <span className="font-semibold">
                  {isGenerating ? 'Génération...' : step === steps.length - 2 ? 'Générer mon programme' : 'Suivant'}
                </span>
                {!isGenerating && <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />}
                {isGenerating && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessCoach;