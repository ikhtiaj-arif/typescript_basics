//union
type noobDev = {
    name: string
}

type juniorDev = {
    name: string,
    expertise: string,
    experience: number
}


//intersection

type noobDev1 = {
    name: string
}

type juniorDev1 = noobDev1 & {
    expertise: string,
    experience: number
}

const newDev:noobDev | juniorDev = {
    name: "mz mm",
    expertise: "ggg",
    experience: 1
} 

//enum type
//not recommended

enum level{
    junior="junior",
    mid="mid",
    senior="senior",
}

type nextDev = juniorDev & {
    leadership: number,
    level:level.junior
}