//#region imports
import { age } from "src/models/enums/Age";
import { fivePointLikertScale } from "src/models/enums/FivePointLikertScale";
import { CommunityMeasures } from "src/models/interfaces/CommunityMeasures";
import { IndividualMeasures } from "src/models/interfaces/IndividualMeasures";
import { TeamComposition } from "src/models/interfaces/TeamComposition";
import { TeamProcess } from "src/models/interfaces/TeamProcess";
import { ProjectMeasures } from "src/models/interfaces/ProjectMeasures";
import { EventMeasures } from "src/models/interfaces/EventMeasures";
import { Session } from "src/models/interfaces/EventMeasures";
import { DemographicsIndividualBackground } from "src/models/interfaces/DemographicsIndividualBackground";
import { gender } from "src/models/enums/Gender";
import { education } from "src/models/enums/Education";
import { minority } from "src/models/enums/Minority";
import { Mentoring } from "src/models/interfaces/Mentoring";
import { IndividualProgrammingExperience } from "src/models/interfaces/IndividualProgrammingExperience";
import { role } from "src/models/enums/Role";
import {userAnswers} from "../services/data";
//#endregion 

export class ResponseService {
//#region Instances
    public individualMeasures : IndividualMeasures = {
        Motivation: {},
        MotivationOther: [],
        EventParticipation : [],
    };
    public teamComposition : TeamComposition = {
        TeamId: [],
        TeamSize: [],
        CodeRepo: [],
        ResourcesURL: [],
        TeamLeader: [],
        TeamManager: [],
        SocialLeader: [],
    }
    public teamProcess : TeamProcess = {
        SatisfactionWithProcess:{
            Effiency: [],
            Coordination: [],
            Fairness: [],
            Understanding: [],
        },
        GoalClarty:{},
        Voice:{},
    }
    public projectMeasures : ProjectMeasures = {
        SatisfactionWithOutcome: {},
        PerceivedUsefulness: {},
        ContinuationIntentions: {},
        BehavioralControl: {},
    }
    public communityMeasures : CommunityMeasures = {
        CommunityIdentification:{},
        SocialCapital: {},
    }
    public eventMeasures : EventMeasures = {
        SatisfactionWithHackathon:{
            Satisfaction: [],
            Pleasure: [],
            Contended: [],
            Delighted: [],
        },
        FutureParticipationIntentions : [],
        RecommendationLikelyness: [],
        SessionSatisfaction: [],
        SessionUsefulness : [],
        SessionEnjoyment : [],
        GoodEvent: [],
        ImproveEvent: [],
        OpenSharing : [],
    }
    public demographicsIndividualBackground : DemographicsIndividualBackground = {
        Age: [],
        Gender: [],
        Education: [],
        Minority: [],
    };
    public mentoring : Mentoring = {
        MentoringExperience: {},
        MentoringOther: [],
    };

    public individualProgrammingExperience : IndividualProgrammingExperience = {
        ProgrammingExperienceYears: [],
        ProgrammingExperienceComparison: [],
        ProgrammingAbility: {},
        ProgrammingComfort: {},
    };

    
//#endregion
//#region exampleData
    readonly teams : string[] = [
        'Team1', 'Team2', 'Team3', 'Team4', 'Team5'
    ];
    readonly exampleString : string = 'exampleString';

    
//#endregion
    constructor() {
        //individualMeasures
        this.individualMeasures.Motivation['Making something cool / Working on an interesting project idea'] = [];
        this.individualMeasures.Motivation['Learning new tools or skills (Clary, understanding)'] = [];
        this.individualMeasures.Motivation['[HACKATHON_THEME]'] = [];
        this.individualMeasures.Motivation['Meeting new people'] = [];
        this.individualMeasures.Motivation['Seeing what others are working on'] = [];
        this.individualMeasures.Motivation['Sharing my experience and expertise'] = [];
        this.individualMeasures.Motivation['Joining friends that participate (Clary, social)'] = [];
        this.individualMeasures.Motivation['Dedicated time to get work done'] = [];
        this.individualMeasures.Motivation['Wind a prize'] = [];
        this.individualMeasures.Motivation['Having fun'] = [];
        //teamProcess

        this.teamProcess.GoalClarty['I was uncertain of my duties and responsibilities in this team.'] = [];
        this.teamProcess.GoalClarty['I was unclear about the goals and objectives for my work in this team.'] = [];
        this.teamProcess.GoalClarty['I was unsure how my work relates to the overall objectives of my team.'] = [];

        this.teamProcess.Voice['Everyone had a chance to express his/her opinion.'] = [];
        this.teamProcess.Voice['The team members responded to the comments made by others.'] = [];
        this.teamProcess.Voice['The team members participated very actively during the project.'] = [];
        this.teamProcess.Voice['Overall, the participation of each member in the team was effective.'] = [];

        //projectMeasures
        this.projectMeasures.SatisfactionWithOutcome['I am satisfied with the work completed in my project.'] = [];
        this.projectMeasures.SatisfactionWithOutcome['I am satisfied with the quality of my team\'s output.'] = [];
        this.projectMeasures.SatisfactionWithOutcome['My ideal outcome coming into my project achieved.'] = [];
        this.projectMeasures.SatisfactionWithOutcome['My expectations towards my team were met.'] = [];

        this.projectMeasures.PerceivedUsefulness['My project improves my performance during my everyday work'] = [];
        this.projectMeasures.PerceivedUsefulness['My project improves my productivity during my everyday work.'] = [];
        this.projectMeasures.PerceivedUsefulness['My project improves my effectiveness during my everyday work.'] = [];
        this.projectMeasures.PerceivedUsefulness['Overall, my project will be useful during my everyday work.'] = [];

        this.projectMeasures.ContinuationIntentions['I intend to continue working on my hackathon project rather than not continue working on it.'] = [];
        this.projectMeasures.ContinuationIntentions['My intentions are to continue working on my hackathon project rather than any other project.'] = [];
        this.projectMeasures.ContinuationIntentions['If I could, I would like to continue working on my hackathon project as much as possible.'] = [];

        this.projectMeasures.BehavioralControl['I would be able to continue working on my hackathon project.'] = [];
        this.projectMeasures.BehavioralControl['Continuing to work on my hackathon project is entirely under my control.'] = [];
        this.projectMeasures.BehavioralControl['I have the resources, knowledge, and ability to continue working on my project after the hackathon.'] = [];

        //mentoring

        this.mentoring.MentoringExperience['The mentors supported us to scope our project.'] = [];
        this.mentoring.MentoringExperience['The mentors took decisions about the direction of our project.'] = [];
        this.mentoring.MentoringExperience['The mentors provided us with solutions to technical problems we encountered.'] = [];
        this.mentoring.MentoringExperience['The mentors helped us to find our own solutions to technical problems we encountered.'] = [];
        this.mentoring.MentoringExperience['The mentor were mainly focused on our learning progress.'] = [];
        this.mentoring.MentoringExperience['The mentors were mainly focused on our project progress.'] = [];
        this.mentoring.MentoringExperience['The mentors were part of our team.'] = [];
        this.mentoring.MentoringExperience['The mentors showed interest in us beyond the project we were working on.'] = [];
        this.mentoring.MentoringExperience['We could reach the mentors when we needed help.'] = [];

        //communityMeasures


        this.communityMeasures.CommunityIdentification['I identify with other members of this community.'] = [];
        this.communityMeasures.CommunityIdentification['I am like other members of this community.'] = [];
        this.communityMeasures.CommunityIdentification['This community is an important reflection of who I am.'] = [];
        this.communityMeasures.CommunityIdentification['I would like to continue working with this community.'] = [];
        this.communityMeasures.CommunityIdentification['I dislike being a member of this community.'] = [];
        this.communityMeasures.CommunityIdentification['I would rather belong to another community.'] = [];

        this.communityMeasures.SocialCapital['I feel I am part of this community.'] = [];
        this.communityMeasures.SocialCapital['I am interested in what goes on in this community.'] = [];
        this.communityMeasures.SocialCapital['Interacting with other members of this community makes me want to try new things.'] = [];
        this.communityMeasures.SocialCapital['I am willing to spend time to support general activities in this community.'] = [];
        this.communityMeasures.SocialCapital['Through this community I come into contact with new people all the time.'] = [];
        this.communityMeasures.SocialCapital['There are several people in this community that I trust to help me solve my problems.'] = [];
        this.communityMeasures.SocialCapital['I know someone in this community that I can turn to if I urgently need help.'] = [];
        this.communityMeasures.SocialCapital['There is someone in this community that I can turn to for advice about making important decision.'] = [];
        this.communityMeasures.SocialCapital['The other members of this community would be good job references for me.'] = [];
        this.communityMeasures.SocialCapital['I do not know people in this community well enough to get them to do anything important.'] = [];

        //individualProgrammingExperience

        this.individualProgrammingExperience.ProgrammingExperienceYears = [];
        this.individualProgrammingExperience.ProgrammingExperienceComparison = [];

        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in JAVA.'] = [];
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in JAVASCRIPT.'] = [];
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in PYTHON.'] = [];
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in HTML/HTML5.'] = [];
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in DJANGO/AIRAVATA.'] = [];
        this.individualProgrammingExperience.ProgrammingAbility['I can make some use of REQUESTS, JSON and XML.'] = [];
        this.individualProgrammingExperience.ProgrammingAbility['I can make some use of JUPYTER NOTEBOOKS.'] = [];

        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in JAVA.'] = [];
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in JAVASCRIPT.'] = [];
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in PYTHON.'] = [];
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in HTML/HTML5.'] = [];
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in DJANGO/AIRAVATA.'] = [];
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to use REQUESTS, JSON and XML.'] = [];
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to use JUPYTER NOTEBOOKS.'] = [];
     }
     getValue(id : string, userAnswer : any) : string{
        return userAnswer?.answers[id]?.textAnswers?.answers[0]?.value;
    }

     parseUser(userAnswers: any): void {
        userAnswers.responses.forEach((userAnswer:any) => {
            this.insertIndividualMeasures(userAnswer);
            this.insertTeamProcess(userAnswer);
            this.insertProjectMeasures(userAnswer);
            this.insertEventMeasures(userAnswer);
            this.insertTeamComposition(userAnswer);
            this.insertMentoring(userAnswer);
            this.insertCommunityMeasures(userAnswer);
            this.insertIndividualProgrammingExperience(userAnswer);
            this.insertDemographicsIndividualBackground(userAnswer);
        });
     }

     getRandomInt(max : number) {
        return Math.floor(Math.random() * max);
      }
      

    getAge(pAge: string): any {
        if(!pAge) return null;

        switch(pAge.toLowerCase()){
        case '18 to 24': { 
            return age.Range1; 
            break; 
         } 
         case '25 to 34': { 
            return age.Range2; 
            break; 
         }
         case '35 to 44': { 
             return age.Range3; 
             break; 
          }
          case '45 to 54': { 
             return age.Range4; 
             break; 
          }
          case '55 to 64': { 
            return age.Range5; 
            break; 
         } 
         case '65 to 74': { 
            return age.Range6; 
            break; 
         }
         case '75 or older': { 
             return age.Range7; 
             break; 
          }
          case 'prefer not to say': { 
             return age.PreferNotToSay; 
             break; 
          }
          default: { 
            throw new Error(pAge)
        } 
        }
    }
    
    getEducation(pEdudation: string): any {

        if(!pEdudation) return null;
        switch(pEdudation.toLowerCase()){

        case 'high school diploma or ged': { 
            return education.HighSchool; 
            break; 
         } 
         case 'some college, associate and/or bachelor\'s degree': { 
             return education.CollegeAssociateBachelor; 
             break; 
          }
          case 'bachelor\'s degree': { 
             return education.Bachelor; 
             break; 
          }
          case 'professional degree': { 
            return education.Professional; 
            break; 
         } 
         case 'master\'s degree': { 
            return education.Master; 
            break; 
         }
         case 'doctorate': { 
             return education.Doctorate; 
             break; 
          }
          case 'prefer not to say': { 
             return education.PreferNotToSay; 
             break; 
          }
          default: { 
            throw new Error(pEdudation)
        } 
        }
    }

    
    getFivePointScala(answer : string): any {
        if(!answer) return null;

        let pAnswer = answer.toLowerCase()
        switch(pAnswer) { 
            case 'not at all':
            case 'strongly disagree':
            case 'definitely not':
            case 'not useful':
            case 'not enjoyable':
            case 'very inexperienced':
            case 'definitely not':
            case '(1)': { 
               return fivePointLikertScale.Least; 
               break; 
            } 
            case 'to some extent':
            case 'somewhat disagree':
            case 'probably not':
            case 'slightly useful':
            case 'slightly enjoyable':
            case 'inexperienced.':
            case 'probably not':
            case '(2)': { 
               return fivePointLikertScale.MediumLeast; 
               break; 
            }
            case 'to a moderate extent':
            case 'neither agree nor disagree':
            case 'moderately useful':
            case 'definitely not ':
            case 'moderately enjoyable':
            case 'comparable.':
            case 'might or might not,':
            case '(3)': { 
                return fivePointLikertScale.Medium; 
                break; 
             }
            case 'to a large extent':
            case 'somewhat agree':
            case 'probably yes':
            case 'useful':
            case 'enjoyable':
            case 'experienced.':
            case 'probably yes':
            case '(4)': { 
                return fivePointLikertScale.MediumMax; 
                break; 
             }
            case 'completely':
            case 'strongly agree':
            case 'definitely yes':
            case 'very useful':
            case 'very enjoyable':
            case 'very experienced.':
            case 'definitely yes':
            case '(5)':  { 
                return fivePointLikertScale.Max; 
                break; 
             }
            default: { 
                if(answer.includes('(1)')){
                    return fivePointLikertScale.Least; 
                }else{if(answer.includes('(2)')){
                    return fivePointLikertScale.MediumLeast; 
                }else{if(answer.includes('(3)')){
                    return fivePointLikertScale.Medium; 
                }else{if(answer.includes('(4)')){
                    return fivePointLikertScale.MediumMax; 
                }else{if(answer.includes('(5)')){
                    return fivePointLikertScale.Max; 
                }}}}}
                throw new Error(answer)
            }
        }
    }

    
    getGender(pGender: string): any {
        if(!pGender) return null;
        switch(pGender.toLowerCase()){
       
        case 'female': { 
            return gender.Female; 
            break; 
         } 
         case 'male': { 
            return gender.Male; 
            break; 
         }
         case 'non-binary': { 
             return gender.NonBinary; 
             break; 
          }
          case 'prefer not to say': { 
             return gender.PreferNotToSay; 
             break; 
          }
          default: { 
            throw new Error(pGender)
        } 
        }
    }


    getMinority(answer: string): any {
        if(!answer) return null;
        switch(answer.toLowerCase()){
        case 'yes': { 
            return minority.Yes; 
            break; 
         } 
         case 'no': { 
            return minority.No; 
            break; 
         }
         case 'prefer not to say': { 
             return minority.PreferNotToSay; 
             break; 
          }
          default: { 
            throw new Error(answer)
        } 
        }
    }

    getRole(pRole: string): any {
        if(!pRole) return null;
        switch(pRole.toLowerCase()) { 
            case 'yes, i was the team leader.':
            case 'yes, i was the project manager.':
            case 'yes, i was the social-emotional leader.': { 
               return role.Yes; 
               break; 
            } 
            case 'yes, someone else was the team leader.':
            case 'yes, someone else was the project manager.':
            case 'yes, someone else was the social-emotional leader.': { 
               return role.SomeOneElse; 
               break; 
            }
            case 'no, there was no clear leader in the team':
            case 'no, there was no clear project manager in the team':
            case 'no, there was no clear social-emotional leader in the team': { 
                return role.Nobody; 
                break; 
             }
            
            default: { 
                throw new Error(pRole);
                
            } 
        }
    }



    
    
     insertIndividualMeasures(userAnswer : any) : void{
        this.individualMeasures.Motivation['Having fun'].push( this.getFivePointScala(this.getValue('00000011',userAnswer)));
        this.individualMeasures.Motivation['Making something cool / Working on an interesting project idea'].push(this.getFivePointScala(this.getValue('00000012',userAnswer)));
        this.individualMeasures.Motivation['Learning new tools or skills (Clary, understanding)'].push( this.getFivePointScala(this.getValue('00000013',userAnswer)));
        this.individualMeasures.Motivation['[HACKATHON_THEME]'].push(this.getFivePointScala(this.getValue('00000014',userAnswer)));
        this.individualMeasures.Motivation['Meeting new people'].push(this.getFivePointScala(this.getValue('00000015',userAnswer)));
        this.individualMeasures.Motivation['Seeing what others are working on'].push( this.getFivePointScala(this.getValue('00000016',userAnswer)));
        this.individualMeasures.Motivation['Sharing my experience and expertise'].push( this.getFivePointScala(this.getValue('00000017',userAnswer)));
        this.individualMeasures.Motivation['Joining friends that participate (Clary, social)'].push( this.getFivePointScala(this.getValue('00000018',userAnswer)));
        this.individualMeasures.Motivation['Dedicated time to get work done'].push( this.getFivePointScala(this.getValue('00000019',userAnswer)));
        this.individualMeasures.Motivation['Wind a prize'].push( this.getFivePointScala(this.getValue('00000110',userAnswer)))


        this.individualMeasures.MotivationOther.push(this.getValue('00000021', userAnswer));

        this.individualMeasures.EventParticipation.push(Number(this.getValue('00000031', userAnswer)));
    }

   insertTeamProcess(userAnswer : any) : void{
    this.teamProcess.SatisfactionWithProcess.Effiency.push(this.getFivePointScala(this.getValue('00000141',userAnswer)));
    this.teamProcess.SatisfactionWithProcess.Coordination.push(this.getFivePointScala(this.getValue('00000151',userAnswer)));
    this.teamProcess.SatisfactionWithProcess.Fairness.push(this.getFivePointScala(this.getValue('00000161',userAnswer)));
    this.teamProcess.SatisfactionWithProcess.Understanding.push(this.getFivePointScala(this.getValue('00000171',userAnswer)));

    this.teamProcess.GoalClarty['I was uncertain of my duties and responsibilities in this team.'].push( this.getFivePointScala(this.getValue('00000181',userAnswer)));
    this.teamProcess.GoalClarty['I was unclear about the goals and objectives for my work in this team.'].push( this.getFivePointScala(this.getValue('00000182',userAnswer)));
    this.teamProcess.GoalClarty['I was unsure how my work relates to the overall objectives of my team.'].push( this.getFivePointScala(this.getValue('00000183',userAnswer)));

    this.teamProcess.Voice['Everyone had a chance to express his/her opinion.'].push( this.getFivePointScala(this.getValue('00000191',userAnswer)));
    this.teamProcess.Voice['The team members responded to the comments made by others.'].push( this.getFivePointScala(this.getValue('00000192',userAnswer)));
    this.teamProcess.Voice['The team members participated very actively during the project.'].push( this.getFivePointScala(this.getValue('00000193',userAnswer)));
    this.teamProcess.Voice['Overall, the participation of each member in the team was effective.'].push( this.getFivePointScala(this.getValue('00000194',userAnswer)));

   }
   
   insertProjectMeasures(userAnswer : any) : void {
       this.projectMeasures.SatisfactionWithOutcome['I am satisfied with the work completed in my project.'].push( this.getFivePointScala(this.getValue('00000211',userAnswer)));
       this.projectMeasures.SatisfactionWithOutcome['I am satisfied with the quality of my team\'s output.'].push( this.getFivePointScala(this.getValue('00000212',userAnswer)));
       this.projectMeasures.SatisfactionWithOutcome['My ideal outcome coming into my project achieved.'].push( this.getFivePointScala(this.getValue('00000213',userAnswer)));
       this.projectMeasures.SatisfactionWithOutcome['My expectations towards my team were met.'].push( this.getFivePointScala(this.getValue('00000214',userAnswer)));

       this.projectMeasures.PerceivedUsefulness['My project improves my performance during my everyday work'].push( this.getFivePointScala(this.getValue('00000221',userAnswer)));
       this.projectMeasures.PerceivedUsefulness['My project improves my productivity during my everyday work.'].push( this.getFivePointScala(this.getValue('00000222',userAnswer)));
       this.projectMeasures.PerceivedUsefulness['My project improves my effectiveness during my everyday work.'].push( this.getFivePointScala(this.getValue('00000223',userAnswer)));
       this.projectMeasures.PerceivedUsefulness['Overall, my project will be useful during my everyday work.'].push( this.getFivePointScala(this.getValue('00000224',userAnswer)));

       this.projectMeasures.ContinuationIntentions['I intend to continue working on my hackathon project rather than not continue working on it.'].push( this.getFivePointScala(this.getValue('00000231',userAnswer)));
       this.projectMeasures.ContinuationIntentions['My intentions are to continue working on my hackathon project rather than any other project.'].push( this.getFivePointScala(this.getValue('00000232',userAnswer)));
       this.projectMeasures.ContinuationIntentions['If I could, I would like to continue working on my hackathon project as much as possible.'].push( this.getFivePointScala(this.getValue('00000233',userAnswer)));

       this.projectMeasures.BehavioralControl['I would be able to continue working on my hackathon project.'].push( this.getFivePointScala(this.getValue('00000241',userAnswer)));
       this.projectMeasures.BehavioralControl['Continuing to work on my hackathon project is entirely under my control.'].push( this.getFivePointScala(this.getValue('00000242',userAnswer)));
       this.projectMeasures.BehavioralControl['I have the resources, knowledge, and ability to continue working on my project after the hackathon.'].push( this.getFivePointScala(this.getValue('00000243',userAnswer)));
   }


   insertEventMeasures(userAnswer : any) : void {
    this.eventMeasures.SatisfactionWithHackathon.Satisfaction.push( this.getFivePointScala(this.getValue('00000321',userAnswer)));
    this.eventMeasures.SatisfactionWithHackathon.Pleasure.push( this.getFivePointScala(this.getValue('00000331',userAnswer)));
    this.eventMeasures.SatisfactionWithHackathon.Contended.push( this.getFivePointScala(this.getValue('00000341',userAnswer)));
    this.eventMeasures.SatisfactionWithHackathon.Delighted.push( this.getFivePointScala(this.getValue('00000351',userAnswer)));

    this.eventMeasures.FutureParticipationIntentions.push( this.getFivePointScala(this.getValue('00000361',userAnswer)));
    this.eventMeasures.RecommendationLikelyness.push(Number(this.getValue('00000371',userAnswer)));


    const sessionSatisfaction : Session = {
        PreEventWebinar : this.getFivePointScala(this.getValue('00000381',userAnswer)),
        Checkpoints : this.getFivePointScala(this.getValue('00000382',userAnswer)),
        MentoringSessions : this.getFivePointScala(this.getValue('00000383',userAnswer)),
        }

    this.eventMeasures.SessionSatisfaction.push(sessionSatisfaction);

    const sessionUsefulness : Session = {
        PreEventWebinar : this.getFivePointScala(this.getValue('00000391',userAnswer)),
        Checkpoints : this.getFivePointScala(this.getValue('00000392',userAnswer)),
        MentoringSessions : this.getFivePointScala(this.getValue('00000393',userAnswer)),
        }
        this.eventMeasures.SessionUsefulness.push(sessionUsefulness);

    const sessionEnjoyment : Session = {
        PreEventWebinar : this.getFivePointScala(this.getValue('00000401',userAnswer)),
        Checkpoints : this.getFivePointScala(this.getValue('00000402',userAnswer)),
        MentoringSessions : this.getFivePointScala(this.getValue('00000403',userAnswer)),
    }
    this.eventMeasures.SessionEnjoyment.push(sessionEnjoyment);

    this.eventMeasures.GoodEvent.push(this.getValue('00000411',userAnswer));
    this.eventMeasures.ImproveEvent.push(this.getValue('00000421', userAnswer))
    this.eventMeasures.OpenSharing.push(this.getValue('00000431', userAnswer))
    }

    insertTeamComposition(userAnswer : any) : void{
            this.teamComposition.TeamId.push(this.getValue('00000051',userAnswer));
            this.teamComposition.TeamSize.push(Number(this.getValue('00000061',userAnswer)));
            this.teamComposition.CodeRepo.push(this.getValue('00000071',userAnswer));
            this.teamComposition.ResourcesURL.push(this.getValue('00000081',userAnswer));
            this.teamComposition.TeamLeader.push(this.getRole(this.getValue('00000091',userAnswer)));
            this.teamComposition.TeamManager.push(this.getRole(this.getValue('00000101',userAnswer)));
            this.teamComposition.SocialLeader.push(this.getRole(this.getValue('00000111',userAnswer)));
    }


    insertMentoring(userAnswer : any) : void{
            this.mentoring.MentoringExperience['The mentors supported us to scope our project.'].push(this.getFivePointScala(this.getValue('00000261',userAnswer)));
            this.mentoring.MentoringExperience['The mentors took decisions about the direction of our project.'].push(this.getFivePointScala(this.getValue('00000262',userAnswer)));
            this.mentoring.MentoringExperience['The mentors provided us with solutions to technical problems we encountered.'].push(this.getFivePointScala(this.getValue('00000263',userAnswer)));
            this.mentoring.MentoringExperience['The mentors helped us to find our own solutions to technical problems we encountered.'].push(this.getFivePointScala(this.getValue('00000264',userAnswer)));
            this.mentoring.MentoringExperience['The mentor were mainly focused on our learning progress.'].push(this.getFivePointScala(this.getValue('00000265',userAnswer)));
            this.mentoring.MentoringExperience['The mentors were mainly focused on our project progress.'].push(this.getFivePointScala(this.getValue('00000266',userAnswer)));
            this.mentoring.MentoringExperience['The mentors were part of our team.'].push(this.getFivePointScala(this.getValue('00000267',userAnswer)));
            this.mentoring.MentoringExperience['The mentors showed interest in us beyond the project we were working on.'].push(this.getFivePointScala(this.getValue('00000268',userAnswer)));
            this.mentoring.MentoringExperience['We could reach the mentors when we needed help.'].push(this.getFivePointScala(this.getValue('00000269',userAnswer)));

            this.mentoring.MentoringOther.push(this.getValue('00000271',userAnswer));
    }

    insertCommunityMeasures(userAnswer : any) : void{
        this.communityMeasures.CommunityIdentification['I identify with other members of this community.'].push(this.getFivePointScala(this.getValue('00000291',userAnswer)));
        this.communityMeasures.CommunityIdentification['I am like other members of this community.'].push(this.getFivePointScala(this.getValue('00000292',userAnswer)));
        this.communityMeasures.CommunityIdentification['This community is an important reflection of who I am.'].push(this.getFivePointScala(this.getValue('00000293',userAnswer)));
        this.communityMeasures.CommunityIdentification['I would like to continue working with this community.'].push(this.getFivePointScala(this.getValue('00000294',userAnswer)));
        this.communityMeasures.CommunityIdentification['I dislike being a member of this community.'].push(this.getFivePointScala(this.getValue('00000295',userAnswer)));
        this.communityMeasures.CommunityIdentification['I would rather belong to another community.'].push(this.getFivePointScala(this.getValue('00000296',userAnswer)));

        this.communityMeasures.SocialCapital['I feel I am part of this community.'].push(this.getFivePointScala(this.getValue('00000301',userAnswer)));
        this.communityMeasures.SocialCapital['I am interested in what goes on in this community.'].push(this.getFivePointScala(this.getValue('00000302',userAnswer)));
        this.communityMeasures.SocialCapital['Interacting with other members of this community makes me want to try new things.'].push(this.getFivePointScala(this.getValue('00000303',userAnswer)));
        this.communityMeasures.SocialCapital['I am willing to spend time to support general activities in this community.'].push(this.getFivePointScala(this.getValue('00000304',userAnswer)));
        this.communityMeasures.SocialCapital['Through this community I come into contact with new people all the time.'].push(this.getFivePointScala(this.getValue('00000305',userAnswer)));
        this.communityMeasures.SocialCapital['There are several people in this community that I trust to help me solve my problems.'].push(this.getFivePointScala(this.getValue('00000306',userAnswer)));
        this.communityMeasures.SocialCapital['I know someone in this community that I can turn to if I urgently need help.'].push(this.getFivePointScala(this.getValue('00000307',userAnswer)));
        this.communityMeasures.SocialCapital['There is someone in this community that I can turn to for advice about making important decision.'].push(this.getFivePointScala(this.getValue('00000308',userAnswer)));
        this.communityMeasures.SocialCapital['The other members of this community would be good job references for me.'].push(this.getFivePointScala(this.getValue('00000309',userAnswer)));
        this.communityMeasures.SocialCapital['I do not know people in this community well enough to get them to do anything important.'].push(this.getFivePointScala(this.getValue('00003010',userAnswer)));
    }

    insertIndividualProgrammingExperience(userAnswer : any) : void {
        this.individualProgrammingExperience.ProgrammingExperienceYears.push(Number(this.getValue('00000451',userAnswer)));
        this.individualProgrammingExperience.ProgrammingExperienceComparison.push(this.getFivePointScala(this.getValue('00000461',userAnswer)));
        
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in JAVA.'].push(this.getFivePointScala(this.getValue('00000471',userAnswer)));
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in JAVASCRIPT.'].push(this.getFivePointScala(this.getValue('00000472',userAnswer)));
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in PYTHON.'].push(this.getFivePointScala(this.getValue('00000473',userAnswer)));
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in HTML/HTML5.'].push(this.getFivePointScala(this.getValue('00000474',userAnswer)));
        this.individualProgrammingExperience.ProgrammingAbility['I am able to write some parts of programs in DJANGO/AIRAVATA.'].push(this.getFivePointScala(this.getValue('00000475',userAnswer)));
        this.individualProgrammingExperience.ProgrammingAbility['I can make some use of REQUESTS, JSON and XML.'].push(this.getFivePointScala(this.getValue('00000476',userAnswer)));
        this.individualProgrammingExperience.ProgrammingAbility['I can make some use of JUPYTER NOTEBOOKS.'].push(this.getFivePointScala(this.getValue('00000477',userAnswer)));

        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in JAVA.'].push(this.getFivePointScala(this.getValue('00000481',userAnswer)));
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in JAVASCRIPT.'].push(this.getFivePointScala(this.getValue('00000482',userAnswer)));
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in PYTHON.'].push(this.getFivePointScala(this.getValue('00000483',userAnswer)));
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in HTML/HTML5.'].push(this.getFivePointScala(this.getValue('00000484',userAnswer)));
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to write programs in DJANGO/AIRAVATA.'].push(this.getFivePointScala(this.getValue('00000485',userAnswer)));
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to use REQUESTS, JSON and XML.'].push(this.getFivePointScala(this.getValue('00000486',userAnswer)));
        this.individualProgrammingExperience.ProgrammingComfort['I am comfortable to use JUPYTER NOTEBOOKS.'].push(this.getFivePointScala(this.getValue('00000487',userAnswer)));


    }

   insertDemographicsIndividualBackground(userAnswer : any) : void {
    this.demographicsIndividualBackground.Age.push(this.getAge(this.getValue('00000491',userAnswer)));
    this.demographicsIndividualBackground.Gender.push(this.getGender(this.getValue('00000511',userAnswer)));
    this.demographicsIndividualBackground.Education.push(this.getEducation(this.getValue('00000521',userAnswer)));
    this.demographicsIndividualBackground.Minority.push(this.getMinority(this.getValue('00000531',userAnswer)));
   }
   
}