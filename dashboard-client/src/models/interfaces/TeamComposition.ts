import { role } from "../enums/Role";
import {fivePointLikertScale} from "../enums/FivePointLikertScale";

export interface TeamComposition{
    TeamId : string[];
    TeamSize : number[];
    CodeRepo : string[];
    ResourcesURL : string[];
    TeamLeader : role[];
    TeamManager : role[];
    SocialLeader : role[];
    TeamFamiliarity:{[key: string]: fivePointLikertScale[]};
}
