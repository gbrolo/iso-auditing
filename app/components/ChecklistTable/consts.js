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
    },
    {
        mainSection: 'A.9',
        section: 'Access Control',
        subSection: [
            {
                standard: 'A.9.1',
                section: 'Business requirements for access control',
                standards: [
                    { 
                        standard: 'A.9.1.1', 
                        section: 'Access control policy', 
                        points: ['Is there a documented access control policy?', 'Is the policy based on business requirements? ', 'Is the policy communicated appropriately?'] 
                    },
                    { 
                        standard: 'A.9.1.2', 
                        section: 'Access to networks and network services', 
                        points: ['Are controls in place to ensure users only have access to the network resources they have been specially authorised to use and are required for their duties?'] 
                    }
                ]
            },
            {
                standard: 'A.9.2',
                section: 'User access management',
                standards: [
                    { 
                        standard: 'A.9.2.1', 
                        section: 'User registration and de-registration', 
                        points: ['Is there a formal user access registration process in place?'] 
                    },
                    { 
                        standard: 'A.9.2.2', 
                        section: 'User access provisioning', 
                        points: ['Is there a formal user access provisioning process in place to assign access rights for all user types and services?'] 
                    },
                    { 
                        standard: 'A.9.2.3', 
                        section: 'Management of privileged access rights', 
                        points: ['Are privileged access accounts separately managed and controlled?'] 
                    },
                    { 
                        standard: 'A.9.2.4', 
                        section: 'Management of secret authentication information of users', 
                        points: ['Is there a formal management process in place to control allocation of secret authentication information?'] 
                    },
                    { 
                        standard: 'A.9.2.5', 
                        section: 'Review of user access rights', 
                        points: ['Is there a process for asset owners to review access rights to their assets on a regular basis?', 'Is this review process verified?'] 
                    },
                    { 
                        standard: 'A.9.2.6', 
                        section: 'Removal or adjustment of access rights', 
                        points: ['Is there  a process to ensure user access rights are removed on termination of employment or contract, or adjusted upon change of role?'] 
                    }                    
                ]
            },
            {
                standard: 'A.9.3',
                section: 'User responsibilities',
                standards: [
                    { 
                        standard: 'A.9.3.1', 
                        section: 'Use of secret authentication information', 
                        points: ['Is there a policy document covering the organisations practices in how secret authentication information must be handled?', 'Is this communicated to all users?'] 
                    }                                       
                ]
            },
            {
                standard: 'A.9.4',
                section: 'System and application access control',
                standards: [
                    { 
                        standard: 'A.9.4.1', 
                        section: 'Information access restriction', 
                        points: ['Is access to information and application system functions restricted in line with the access control policy?'] 
                    },
                    { 
                        standard: 'A.9.4.2', 
                        section: 'Secure log-on procedures', 
                        points: ['Where the access control policy requires it, is access controlled by a secure log-on procedure?'] 
                    },
                    { 
                        standard: 'A.9.4.3', 
                        section: 'Password management system', 
                        points: ['Are password systems interactive?', 'Are complex passwords required?'] 
                    },
                    { 
                        standard: 'A.9.4.4', 
                        section: 'Use of privileged utility programs', 
                        points: ['Are privilege utility programs restricted and monitored?'] 
                    },
                    { 
                        standard: 'A.9.4.5', 
                        section: 'Access control to program source code', 
                        points: ['Is access to the source code of the Access Control System protected?'] 
                    }                                       
                ]
            },
        ]
    },
    {
        mainSection: 'A.10',
        section: 'Cryptography',
        subSection: [
            {
                standard: 'A.10.1',
                section: 'Cryptographic controls',
                standards: [
                    { 
                        standard: 'A.10.1.1', 
                        section: 'Policy on the use of cryptographic controls', 
                        points: ['Is there a policy on the use of cryptographic controls?'] 
                    },
                    { 
                        standard: 'A.10.1.2', 
                        section: 'Key management', 
                        points: ['Is there a policy governing the whole lifecycle of cryptographic keys?'] 
                    }
                ]
            }
        ]
    },
    {
        mainSection: 'A.11',
        section: 'Physical and environmental security',
        subSection: [
            {
                standard: 'A.11.1',
                section: 'Secure areas',
                standards: [
                    { 
                        standard: 'A.11.1.1', 
                        section: 'Physical security perimeter', 
                        points: ['Is there a designated security perimeter?', 'Are sensitive or critical information areas segregated and appropriately controlled?'] 
                    },
                    { 
                        standard: 'A.11.1.2', 
                        section: 'Physical entry controls', 
                        points: ['Do secure areas have suitable entry control systems to ensure only authorised personnel have access?'] 
                    },
                    { 
                        standard: 'A.11.1.3', 
                        section: 'Securing offices, rooms and facilities', 
                        points: ['Have offices, rooms and facilities been designed and configured with security in mind?', 'Do processes for maintaining the security (e.g. Locking up, clear desks etc.) exist?'] 
                    },
                    { 
                        standard: 'A.11.1.4', 
                        section: 'Protecting against external and environmental threats', 
                        points: ['Have physical protection measures to prevent natural disasters, malicious attack or accidents been designed in?'] 
                    },
                    { 
                        standard: 'A.11.1.5', 
                        section: 'Working in secure areas', 
                        points: ['Do secure areas exist?', 'Where they do exist, do secure areas have suitable policies and processes?', 'Are the policies and processes enforced and monitored?'] 
                    },
                    { 
                        standard: 'A.11.1.6', 
                        section: 'Delivery and loading areas', 
                        points: ['Are there separate delivery / loading areas?', 'Is access to these areas controls?', 'Is access from loading areas isolated from information processing facilities?'] 
                    }
                ]
            },
            {
                standard: 'A.11.2',
                section: 'Equipment',
                standards: [
                    { 
                        standard: 'A.11.2.1', 
                        section: 'Equipment siting and protection', 
                        points: ['Are environmental hazards identified and considered when equipment locations are selected?', 'Are the risks from unauthorised access / passers-by considered when siting equipment?'] 
                    },
                    { 
                        standard: 'A.11.2.2', 
                        section: 'Supporting utilities', 
                        points: ['Is there a UPS system or back up generator?', 'Have these been tested within an appropriate timescale?'] 
                    },
                    { 
                        standard: 'A.11.2.3', 
                        section: 'Cabling security', 
                        points: ['Have risk assessments been conducted over the location of power and telecommunications cables?', 'Are they located to protect from interference, interception or damage?'] 
                    },
                    { 
                        standard: 'A.11.2.4', 
                        section: 'Equipment maintenance', 
                        points: ['Is there a rigorous equipment maintenance schedule?'] 
                    },
                    { 
                        standard: 'A.11.2.5', 
                        section: 'Removal of assets', 
                        points: ['Is there a process controlling how assets are removed from site?', 'Is this process enforced?', 'Are spot checks carried out?'] 
                    },
                    { 
                        standard: 'A.11.2.6', 
                        section: 'Security of equipment and assets off-premises', 
                        points: ['Is there a policy covering security of assets off-site?', 'Is this policy widely communicated?'] 
                    },
                    { 
                        standard: 'A.11.2.7', 
                        section: 'Secure disposal or reuse of equipment', 
                        points: ['Is there a policy covering how information assets may be reused?', 'Where data is wiped, is this properly verified before reuse/disposal?'] 
                    },
                    { 
                        standard: 'A.11.2.8', 
                        section: 'Unattended user equipment', 
                        points: ['Does the organisation have a policy around how unattended equipment should be protected?', 'Are technical controls in place to secure equipment that has been inadvertently left unattended?'] 
                    },
                    { 
                        standard: 'A.11.2.9', 
                        section: 'Clear desk and clear screen policy', 
                        points: ['Is there a clear desk / clear screen policy?', 'Is this well enforced?'] 
                    }                      
                ]
            }
        ]
    },
    {
        mainSection: 'A.12',
        section: 'Operations security',
        subSection: [
            {
                standard: 'A.12.1',
                section: 'Operational procedures and responsibilities',
                standards: [
                    { 
                        standard: 'A.12.1.1', 
                        section: 'Documented operating procedures', 
                        points: ['Are operating procedures well documented?', 'Are the procedures made available to all users who need them?'] 
                    },
                    { 
                        standard: 'A.12.1.2', 
                        section: 'Change management', 
                        points: ['Is there a controlled change management process in place?'] 
                    },
                    { 
                        standard: 'A.12.1.3', 
                        section: 'Capacity management', 
                        points: ['Is there a capacity management process in place?'] 
                    },
                    { 
                        standard: 'A.12.1.4', 
                        section: 'Separation of development, testing and operational environments', 
                        points: ['Does the organisation enforce segregation of development, test and operational environments?'] 
                    }
                ]
            },
            {
                standard: 'A.12.2',
                section: 'Protection from malware',
                standards: [
                    { 
                        standard: 'A.12.2.1', 
                        section: 'Controls against malware', 
                        points: ['Are processes to detect malware in place? ', 'Are processes to prevent malware spreading in place?', 'Does the organisation have a process and capacity to recover from a malware infection.	'] 
                    }
                ]
            },
            {
                standard: 'A.12.3',
                section: 'Backup',
                standards: [
                    { 
                        standard: 'A.12.3.1', 
                        section: 'Information backup', 
                        points: ['Is there an agreed backup policy? ', "Does the organisation's backup policy comply with relevant legal frameworks? ", 'Are backups made in accordance with the policy?', 'Are backups tested?'] 
                    }
                ]
            },
            {
                standard: 'A.12.4',
                section: 'Logging and monitoring',
                standards: [
                    { 
                        standard: 'A.12.4.1', 
                        section: 'Event logging', 
                        points: ['Are appropriate event logs maintained and regularly reviewed?'] 
                    },
                    { 
                        standard: 'A.12.4.2', 
                        section: 'Protection of log information', 
                        points: ['Are logging facilities protected against tampering and unauthorised access?'] 
                    },
                    { 
                        standard: 'A.12.4.3', 
                        section: 'Administrator and operator logs', 
                        points: ['Are sysadmin / sysop logs maintained, protected and regularly reviewed?'] 
                    },
                    { 
                        standard: 'A.12.4.4', 
                        section: 'Clock synchronisation', 
                        points: ['Are all clocks within the organisation'] 
                    }
                ]
            },
            {
                standard: 'A.12.5',
                section: 'Control of operational software',
                standards: [
                    { 
                        standard: 'A.12.5.1', 
                        section: 'Installation of software on operational systems', 
                        points: ['Is there a process in place to control the installation of software onto operational systems?'] 
                    }
                ]
            },
            {
                standard: 'A.12.6',
                section: 'Technical vulnerability management',
                standards: [
                    { 
                        standard: 'A.12.6.1', 
                        section: 'Management of technical vulnerabilities', 
                        points: ['Does the organisation have access to updated and timely information on technical vulnerabilities?', 'Is there a process to risk assess and react to any new vulnerabilities as they are discovered?'] 
                    },
                    { 
                        standard: 'A.12.6.2', 
                        section: 'Restrictions on soft-ware installation', 
                        points: ['Are there processes in place to restrict how users install software?'] 
                    }
                ]
            },
            {
                standard: 'A.12.7',
                section: 'Information systems audit considerations',
                standards: [
                    { 
                        standard: 'A.12.7.1', 
                        section: 'Information systems audit controls', 
                        points: ['Are IS Systems subject to audit?', 'Does the audit process ensure business disruption is minimised?'] 
                    }
                ]
            }
        ]
    },
    {
        mainSection: 'A.13',
        section: 'Communications security',
        subSection: [
            {
                standard: 'A.13.1',
                section: 'Network security management',
                standards: [
                    { 
                        standard: 'A.13.1.1', 
                        section: 'Network controls', 
                        points: ['Is there a network management process in place?'] 
                    },
                    { 
                        standard: 'A.13.1.2', 
                        section: 'Security of network services', 
                        points: ['Does the organisation implement a risk management approach which identifies all network services and service agreements? ', 'Is security mandated in agreements and contracts with service providers (in house and outsourced). ', 'Are security related SLAs mandated?'] 
                    },
                    { 
                        standard: 'A.13.1.3', 
                        section: 'Segregation in networks', 
                        points: ['Does the network topology enforce segregation of networks for different tasks?'] 
                    }
                ]
            },
            {
                standard: 'A.13.2',
                section: 'Information transfer',
                standards: [
                    { 
                        standard: 'A.13.2.1', 
                        section: 'Information transfer policies and procedures', 
                        points: ['Do organisational policies govern how information is transferred? ', 'Are procedures for how data should be transferred made available to all employees?', 'Are relevant technical controls in place to prevent non-authorised forms of data transfer?'] 
                    },
                    { 
                        standard: 'A.13.2.2', 
                        section: 'Agreements on information transfer', 
                        points: ['Do contracts with external parties and agreements within the organisation detail the requirements for securing business information in transfer?'] 
                    },
                    { 
                        standard: 'A.13.2.3', 
                        section: 'Electronic messaging', 
                        points: ['Do security policies cover the use of information transfer while using electronic messaging systems?'] 
                    },
                    { 
                        standard: 'A.13.2.4', 
                        section: 'Confidentiality or nondisclosure agreements', 
                        points: ['Do employees, contractors and agents sign confidentiality or non disclosure agreements? ', 'Are these agreements subject to regular review?', 'Are records of the agreements maintained?'] 
                    }
                ]
            }
        ]
    },
    {
        mainSection: 'A.14',
        section: 'System acquisition, development and maintenance',
        subSection: [
            {
                standard: 'A.14.1',
                section: 'Security requirements of information systems',
                standards: [
                    { 
                        standard: 'A.14.1.1', 
                        section: 'Information security requirements analysis and specification', 
                        points: ['Are information security requirements specified when new systems are introduced?', 'When systems are being enhanced or upgraded, are security requirements specified and addressed?'] 
                    },
                    { 
                        standard: 'A.14.1.2', 
                        section: 'Securing application services on public networks', 
                        points: ['Do applications which send information over public networks appropriately protect the information against fraudulent activity, contract dispute, unauthorised discloser and unauthorised modification?'] 
                    },
                    { 
                        standard: 'A.14.1.3', 
                        section: 'Protecting application services transactions', 
                        points: ['Are controls in place to prevent incomplete transmission, misrouting, unauthorised message alteration, unauthorised disclosure, unauthorised message duplication or replay attacks?'] 
                    }
                ]
            },
            {
                standard: 'A.14.2',
                section: 'Security in development and support processes',
                standards: [
                    { 
                        standard: 'A.14.2.1', 
                        section: 'Secure development policy', 
                        points: ['Does the organisation develop software or systems? ', 'If so, are there policies mandating the implementation and assessment of security controls?'] 
                    },
                    { 
                        standard: 'A.14.2.2', 
                        section: 'System change control procedures', 
                        points: ['Is there a formal change control process?'] 
                    },
                    { 
                        standard: 'A.14.2.3', 
                        section: 'Technical review of applications after operating platform changes', 
                        points: ['Is there a process to ensure a technical review is carried out when operating platforms are changed?'] 
                    },
                    { 
                        standard: 'A.14.2.4', 
                        section: 'Restrictions on changes to software packages', 
                        points: ['Is there a policy in place which mandates when and how software packages can be changed or modified?'] 
                    },
                    { 
                        standard: 'A.14.2.5', 
                        section: 'Secure system engineering principles', 
                        points: ['Does the organisation have documented principles on how systems must be engineered to ensure security?'] 
                    },
                    { 
                        standard: 'A.14.2.6', 
                        section: 'Secure development environment', 
                        points: ['Has a secure development environment been established? ', 'Do all projects utilise the secure development environment appropriately during the system development lifecycle?'] 
                    },
                    { 
                        standard: 'A.14.2.7', 
                        section: 'Outsourced development', 
                        points: ['Where development has been outsourced is this supervised? ', 'Is externally developed code subject to a security review before deployment?'] 
                    },
                    { 
                        standard: 'A.14.2.8', 
                        section: 'System security testing', 
                        points: ['Where systems or applications are developed, are they security tested as part of the development process?'] 
                    },
                    { 
                        standard: 'A.14.2.9', 
                        section: 'System acceptance testing', 
                        points: ['Is there an established process to accept new systems / applications, or upgrades, into production use?'] 
                    }
                ]
            },
            {
                standard: 'A.14.3',
                section: 'Test data',
                standards: [
                    { 
                        standard: 'A.14.3.1', 
                        section: 'Protection of test data', 
                        points: ['Is there a process for selecting test data? ', 'Is test data suitably protected?'] 
                    }
                ]
            }
        ]
    },
    {
        mainSection: 'A.15',
        section: 'Supplier relationships',
        subSection: [
            {
                standard: 'A.15.1',
                section: 'Information security in supplier relationships',
                standards: [
                    { 
                        standard: 'A.15.1.1', 
                        section: 'Information security policy for supplier relationships', 
                        points: ['Is information security included in contracts established with suppliers and service providers? ', 'Is there an organisation-wide risk management approach to supplier relationships?'] 
                    },
                    { 
                        standard: 'A.15.1.2', 
                        section: 'Addressing security within supplier agreements', 
                        points: ['Are suppliers provided with documented security requirements? ', 'Is supplier access to information assets & infrastructure controlled and monitored?'] 
                    },
                    { 
                        standard: 'A.15.1.3', 
                        section: 'Information and communication technology supply chain', 
                        points: ['Do supplier agreements include requirements to address information security within the service & product supply chain?'] 
                    }
                ]
            },
            {
                standard: 'A.15.2',
                section: 'Supplier service delivery management',
                standards: [
                    { 
                        standard: 'A.15.2.1', 
                        section: 'Monitoring and review of supplier services', 
                        points: ['Are suppliers subject to regular review and audit?'] 
                    },
                    { 
                        standard: 'A.15.2.2', 
                        section: 'Managing changes to supplier services', 
                        points: ['Are changes to the provision of services subject to a management process which includes security & risk assessment?'] 
                    }
                ]
            }
        ]
    },
    {
        mainSection: 'A.16',
        section: 'Information security incident management',
        subSection: [
            {
                standard: 'A.16.1',
                section: 'Management of information security incidents and improvements',
                standards: [
                    { 
                        standard: 'A.16.1.1', 
                        section: 'Responsibilities and procedures', 
                        points: ['Are management responsibilities clearly identified and documented in the incident management processes?'] 
                    },
                    { 
                        standard: 'A.16.1.2', 
                        section: 'Reporting information security events', 
                        points: ['Is there a process for timely reporting of information security events? ', 'Is there a process for reviewing and acting on reported information security events?'] 
                    },
                    { 
                        standard: 'A.16.1.3', 
                        section: 'Reporting information security weaknesses', 
                        points: ['Is there a process for reporting of identified information security weaknesses?', 'Is this process widely communicated?  ', 'Is there a process for reviewing and addressing reports in a timely manner?'] 
                    },
                    { 
                        standard: 'A.16.1.4', 
                        section: 'Assessment of and decision on information security events', 
                        points: ['Is there a process to ensure information security events are properly assessed and classified?'] 
                    },
                    { 
                        standard: 'A.16.1.5', 
                        section: 'Response to information security incidents', 
                        points: ['Is there an incident response process which reflects the classification and severity of information security incidents?'] 
                    },
                    { 
                        standard: 'A.16.1.6', 
                        section: 'Learning from information security incidents', 
                        points: ['Is there a process or framework which allows the organisation to learn from information security incidents and reduce the impact / probability of future events?'] 
                    },
                    { 
                        standard: 'A.16.1.7', 
                        section: 'Collection of evidence', 
                        points: ['Is there a forensic readiness policy? ', 'In the event of an information security incident is relevant data collected in a manner which allows it to be used as evidence?'] 
                    }
                ]
            }
        ]
    },
    {
        mainSection: 'A.17',
        section: 'Information security aspects of business continuity management',
        subSection: [
            {
                standard: 'A.17.1',
                section: 'Information security continuity',
                standards: [
                    { 
                        standard: 'A.17.1.1', 
                        section: 'Planning information security continuity', 
                        points: ["Is information security included in the organisation's continuity plans?"] 
                    },
                    { 
                        standard: 'A.17.1.2', 
                        section: 'Implementing information security continuity', 
                        points: ["Does the organisation's information security function have documented, implemented and maintained processes to maintain continuity of service during an adverse situation?"] 
                    },
                    { 
                        standard: 'A.17.1.3', 
                        section: 'Verify, review and evaluate information security continuity', 
                        points: ['Are continuity plans validated and verified at regular intervals?'] 
                    }
                ]
            },
            {
                standard: 'A.17.2',
                section: 'Redundancies',
                standards: [
                    { 
                        standard: 'A.17.2.1', 
                        section: 'Availability of information processing facilities', 
                        points: ["Do information processing facilities have sufficient redundancy to meet the organisations availability requirements?"] 
                    }
                ]
            }
        ]
    },
    {
        mainSection: 'A.18',
        section: 'Compliance',
        subSection: [
            {
                standard: 'A.18.1',
                section: 'Compliance with legal and contractual requirements',
                standards: [
                    { 
                        standard: 'A.18.1.1', 
                        section: 'Identification of applicable legislation and contractual requirements', 
                        points: ["Has the organisation identified and documented all relevant legislative, regulatory or contractual requirements related to security? ", 'Is compliance documented?'] 
                    },
                    { 
                        standard: 'A.18.1.2', 
                        section: 'Intellectual property rights', 
                        points: ["Does the organisation keep a record of all intellectual property rights and use of proprietary software products? ", 'Does the organisation monitor for the use of unlicensed software?'] 
                    },
                    { 
                        standard: 'A.18.1.3', 
                        section: 'Protection of records', 
                        points: ['	Are records protected from loss, destruction, falsification and unauthorised access or release in accordance with legislative, regulatory, contractual and business requirements?'] 
                    },
                    { 
                        standard: 'A.18.1.4', 
                        section: 'Privacy and protection of personally identifiable information', 
                        points: ['Is personal data identified and appropriately classified? ', 'Is personal data protected in accordance with relevant legislation?'] 
                    },
                    { 
                        standard: 'A.18.1.5', 
                        section: '	Regulation of cryptographic controls', 
                        points: ['Are cryptographic controls protected in accordance with all relevant agreements, legislation and regulations?'] 
                    }
                ]
            },
            {
                standard: 'A.18.2',
                section: 'Information security reviews',
                standards: [
                    { 
                        standard: 'A.18.2.1', 
                        section: 'Independent review of information security', 
                        points: ['Is the organisations approach to managing information security subject to regular independent review? ', 'Is the implementation of security controls subject to regular independent review?'] 
                    },
                    { 
                        standard: 'A.18.2.2', 
                        section: 'Compliance with security policies and standards', 
                        points: ['Does the organisation instruct managers to regularly review compliance with policy and procedures within their area of responsibility?', 'Are records of these reviews maintained?'] 
                    },
                    { 
                        standard: 'A.18.2.3', 
                        section: 'Technical compliance review', 
                        points: ['Does the organisation regularly conduct technical compliance reviews of its information systems?'] 
                    }
                ]
            }
        ]
    }
]