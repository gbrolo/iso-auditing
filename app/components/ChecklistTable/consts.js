export const standards = [
    { 
        standard: 'A.5.1.1', 
        section: 'Policies for information security', 
        points: ['Do Security policies exist?', 'Are all policies approved by management?', 'Are policies properly communicated to employees?'] 
    },
    { 
        standard: 'A.5.1.2', 
        section: 'Review of the policies for information security', 
        points: ['Are security policies subject to review? ', 'Are the reviews conducted at regular intervals?', 'Are reviews conducted when circumstances change?'] 
    }
]

export const checklistData = [
    {
        mainSection: 'A.5',
        section: 'Information Security Policies',
        subSection: [
            {
                standard: 'A.5.1',
                section: 'Management direction for information security',
                standards: [
                    { 
                        standard: 'A.5.1.1', 
                        section: 'Policies for information security', 
                        points: ['Do Security policies exist?', 'Are all policies approved by management?', 'Are policies properly communicated to employees?'] 
                    },
                    { 
                        standard: 'A.5.1.2', 
                        section: 'Review of the policies for information security', 
                        points: ['Are security policies subject to review? ', 'Are the reviews conducted at regular intervals?', 'Are reviews conducted when circumstances change?'] 
                    }
                ]
            }
        ]
    },
    {
        mainSection: 'A.6',
        section: 'Organisation of information security',
        subSection: [
            {
                standard: 'A.6.1',
                section: 'Internal Organisation',
                standards: [
                    { 
                        standard: 'A.6.1.1', 
                        section: 'Information security roles and responsibilities', 
                        points: ['Are responsibilities for the protection of individual assets, and for carrying out specific security processes, clearly identified and defined and communicated to the relevant parties?'] 
                    },
                    { 
                        standard: 'A.6.1.2', 
                        section: 'Segregation of duties', 
                        points: ['Are duties and areas of responsibility separated, in order to reduce opportunities for unauthorized modification or misuse of information, or services?'] 
                    },
                    { 
                        standard: 'A.6.1.3', 
                        section: 'Contact with authorities', 
                        points: ['Is there a procedure documenting when, and by whom, contact with relevant authorities (law enforcement etc.) will be made?', 'Is there a process which details how and when contact is required?', 'Is there a process for routine contact and intelligence sharing?'] 
                    },
                    { 
                        standard: 'A.6.1.4', 
                        section: 'Contact with special interest groups', 
                        points: ['Do relevant individuals within the organisation maintain active membership in relevant special interest groups?'] 
                    },
                    { 
                        standard: 'A.6.1.5', 
                        section: 'Information security in project management', 
                        points: ['Do all projects go through some form of information security assessment?'] 
                    },
                ]
            },
            {
                standard: 'A.6.2',
                section: 'Mobile devices and teleworking',
                standards: [
                    { 
                        standard: 'A.6.2.1', 
                        section: 'Mobile device policy', 
                        points: ['Does a mobile device policy exist?', 'Does the policy have management approval?', 'Does the policy document and address additional risks from using mobile devices (e.g. Theft of asset, use of open wireless hotspots etc.)'] 
                    },
                    { 
                        standard: 'A.6.2.2', 
                        section: 'Teleworking', 
                        points: ['Is there a policy for teleworking?', 'Does this have management approval?', 'Is there a set process for remote workers to get access?', 'Are teleworkers given the advice and equipment to protect their assets?'] 
                    }                    
                ]
            },
        ]
    },
    {
        mainSection: 'A.7',
        section: 'Human resources security',
        subSection: [
            {
                standard: 'A.7.1',
                section: 'Prior to employment',
                standards: [
                    { 
                        standard: 'A.7.1.1', 
                        section: 'Screening', 
                        points: ['Are background verification checks carried out on all new candidates for employment?', 'Are these checks approved by appropriate management authority?', 'Are the checks compliant with relevant laws, regulations and ethics?', 'Are the level of checks required supported by business risk assessments?'] 
                    },
                    { 
                        standard: 'A.7.1.2', 
                        section: 'Terms and conditions of employment', 
                        points: ['Are all employees, contractors and third party users asked to sign confidentiality and non-disclosure agreements?', 'Do employment / service contracts specifically cover the need to protect business information?'] 
                    }
                ]
            },
            {
                standard: 'A.7.2',
                section: 'During employment',
                standards: [
                    { 
                        standard: 'A.7.2.1', 
                        section: 'Management responsibilities', 
                        points: ['Are managers (of all levels) engaged in driving security within the business? ', 'Does management behaviour and policy drive, and encourage, all employees, contractors and 3rd party users to apply security in accordance with established policies and procedures?'] 
                    },
                    { 
                        standard: 'A.7.2.2', 
                        section: 'Information security awareness, education and training', 
                        points: ['Do all employees, contractors and 3rd party users undergo regular security awareness training appropriate to their role and function within the organisation?'] 
                    },
                    { 
                        standard: 'A.7.2.3', 
                        section: 'Disciplinary process', 
                        points: ['Is there a formal disciplinary process which allows the organisation to take action against employees who have committed an information security breach?', 'Is this communicated to all employees?'] 
                    }                    
                ]
            },
            {
                standard: 'A.7.3',
                section: 'Termination and change of employment',
                standards: [
                    { 
                        standard: 'A.7.3.1', 
                        section: 'Termination or change of employment responsibilities', 
                        points: ['Is there  a documented process for terminating or changing employment duties?', 'Are any information security duties which survive employment communicated to the employee or contractor?', 'Is the organisation able to enforce compliance with any duties that survive employment?'] 
                    }                   
                ]
            },
        ]
    },
    {
        mainSection: 'A.8',
        section: 'Asset management',
        subSection: [
            {
                standard: 'A.8.1',
                section: 'Responsibility for assets',
                standards: [
                    { 
                        standard: 'A.8.1.1', 
                        section: 'Inventory of assets', 
                        points: ['Is there an inventory of all assets associated with information and information processing facilities?', 'Is the inventory accurate and kept up to date?'] 
                    },
                    { 
                        standard: 'A.8.1.2', 
                        section: 'Ownership of assets', 
                        points: ['All information assets must have a clearly defined owner who is aware of their responsibilities.'] 
                    },
                    { 
                        standard: 'A.8.1.3', 
                        section: 'Acceptable use of assets', 
                        points: ['Is there an acceptable use policy for each class / type of information asset?', 'Are users made aware of this policy prior to use?'] 
                    },
                    { 
                        standard: 'A.8.1.4', 
                        section: 'Return of assets', 
                        points: ["Is there a process in place to ensure all employees and external users return the organisation's assets on termination of their employment, contract or agreement?"] 
                    }
                ]
            },
            {
                standard: 'A.8.2',
                section: '	Information classification',
                standards: [
                    { 
                        standard: 'A.8.2.1', 
                        section: 'Classification of information', 
                        points: ['Is there a policy governing information classification?', 'Is there a process by which all information can be appropriately classified?'] 
                    },
                    { 
                        standard: 'A.8.2.2', 
                        section: 'Labelling of information', 
                        points: ['Is there a process or procedure for ensuring information classification is appropriately marked on each asset?'] 
                    },
                    { 
                        standard: 'A.8.2.3', 
                        section: 'Handling of assets', 
                        points: ['Is there a procedure for handling each information classification?', 'Are users of information assets made aware of this procedure?'] 
                    }                    
                ]
            },
            {
                standard: 'A.8.3',
                section: 'Media handling',
                standards: [
                    { 
                        standard: 'A.8.3.1', 
                        section: 'Management of removable media', 
                        points: ['Is there a policy governing removable media?', 'Is there a process covering how removable media is managed?', 'Are the policy and process(es) communicated to all employees using removable media?'] 
                    },
                    { 
                        standard: 'A.8.3.2', 
                        section: 'Disposal of media', 
                        points: ['Is there a formal procedure governing how removable media is disposed?'] 
                    },
                    { 
                        standard: 'A.8.3.3', 
                        section: 'Physical media transfer', 
                        points: ['Is there a documented policy and process detailing how physical media should be transported?', 'Is media in transport protected against unauthorised access, misuse or corruption?'] 
                    }                   
                ]
            },
        ]
    }
]