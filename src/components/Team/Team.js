"use client";

import React from 'react';
import SectionText from '../SectionText/SectionText';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import styles from './Team.module.scss';

const Team = () => {
    const teamMembers = [
        {
            role: "MD",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            bgColor: "#fff"
        },
        {
            role: "CEO",
            image: null, 
            bgColor: "#E5E5E5" 
        },
        {
            role: "CFO",
            image: null,
            bgColor: "#E5E5E5"
        },
        {
            role: "CHRO",
            image: null,
            bgColor: "#E5E5E5"
        },
        {
            role: "CFO",
            image: null,
            bgColor: "#E5E5E5"
        }
    ];

    // Dummy avatars for the "350+ Experts" badge
    const expertAvatars = [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64"
    ];

    const ExpertsBadge = () => (
        <div className={styles.expertsBadge}>
            <div className={styles.avatarGroup}>
                {expertAvatars.map((src, i) => (
                    <img key={i} src={src} alt="Expert" className={styles.expertAvatar} />
                ))}
            </div>
            <span className={styles.expertText}>
                Team of <strong>350+</strong> Experts
            </span>
        </div>
    );

    return (
        <section className={styles.teamSection}>
            <div className={`container ${styles.container}`}>
                <SectionText 
                    smallTitle="OUR TEAM"
                    title="Meet Our Experts"
                    description="At Neo Heights, we are at the forefront of industrial and commercial construction, dedicated to delivering top-notch quality while ensuring cost-efficiency. Our skilled team possesses the expertise to transform your vision into reality, completing projects on schedule and within your budget."
                    align="center"
                    maxWidth="900px"
                    customChildren={<ExpertsBadge />}
                />
                
                <div className={styles.teamGrid}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles.teamCard}>
                            <div className={styles.cardVisual} style={{ backgroundColor: member.bgColor }}>
                                {member.image && (
                                    <img src={member.image} alt={member.role} className={styles.memberImage} />
                                )}
                            </div>
                            <div className={styles.cardFooter}>
                                <span className={styles.role}>{member.role}</span>
                                <ArrowUpRight size={20} className={styles.arrowIcon} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.bottomCta}>
                    <span className={styles.ctaLabel}>Meet the team</span>
                    <button className={styles.ctaButton}>
                        Our Team <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Team;
