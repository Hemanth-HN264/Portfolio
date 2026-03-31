import { useState, useEffect, useRef } from "react";

const NAV = ["Home","About","Skills","Projects","Publications","Contact"];

const SKILLS_DATA = {
  "Languages & Web":  { icon:"🌐", color:"#10b981", items:["Java","HTML5","CSS3","JavaScript","SQL","Python"] },
  Frameworks:         { icon:"⚙️", color:"#f59e0b", items:["Spring Boot","Hibernate","React.js","Bootstrap","Tailwind CSS"] },
  "Tools & DevOps":   { icon:"🛠", color:"#3b82f6", items:["JDBC","Git","VS Code","Eclipse IDE","IntelliJ IDEA"] },
  "ML / Deep Learning":{ icon:"🧠", color:"#a855f7", items:["TensorFlow","Keras","NumPy","Pandas","Matplotlib","SciPy"] },
};

const PROJECTS = [
  { title:"Smart Event Booking System", sub:"with QR Validation", tag:"Full Stack", emoji:"🎫", accent:"#10b981", glow:"rgba(16,185,129,0.25)", stack:["Java","Spring Boot","JDBC","MySQL","HTML","CSS","JavaScript"], desc:"Full-stack web app for browsing & booking event tickets with secure auth, QR-based ticket validation, and a powerful admin dashboard." },
  { title:"Deep Learning Emotion Analysis", sub:"from EEG Brain Signals", tag:"Deep Learning", emoji:"🧠", accent:"#a855f7", glow:"rgba(168,85,247,0.25)", stack:["Python","TensorFlow","Keras","NumPy","Pandas","SciPy"], desc:"LSTM-based emotion recognition using FFT-extracted EEG features, with comprehensive preprocessing, scaling, and detailed performance evaluation." },
];

const EXP = [
  { role:"Software Dev Training Intern", company:"JSpiders", period:"Jan 2026 – Present", loc:"Bengaluru", icon:"💻", color:"#10b981", desc:"Java, SQL, HTML/CSS/JS with OOP, data structures, debugging, and project-based learning." },
  { role:"Research Intern", company:"MIT Manipal · Advanced Healthcare Lab", period:"Jan – Mar 2025", loc:"Udupi", icon:"🔬", color:"#a855f7", desc:"Facial Emotion Recognition with ML for healthcare; comparative CV feature extraction study." },
];

const EM = {Java:"☕",HTML5:"🌐",CSS3:"🎨",JavaScript:"⚡",SQL:"🗄️",Python:"🐍","Spring Boot":"🍃",Hibernate:"💾","React.js":"⚛️",Bootstrap:"🅱️","Tailwind CSS":"💨",JDBC:"🔌",Git:"🐙","VS Code":"💙","Eclipse IDE":"🔵","IntelliJ IDEA":"🧠",TensorFlow:"🔶",Keras:"🔴",NumPy:"🔢",Pandas:"🐼",Matplotlib:"📊",SciPy:"🔭"};

function useInView(threshold=0.12){
  const ref=useRef(null); const [v,sv]=useState(false);
  useEffect(()=>{
    const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)sv(true)},{threshold});
    if(ref.current)o.observe(ref.current); return()=>o.disconnect();
  },[]);
  return [ref,v];
}

function Anim({children,delay=0,dir="up",style={}}){
  const [ref,v]=useInView();
  const t={up:"translateY(52px)",down:"translateY(-52px)",left:"translateX(-60px)",right:"translateX(60px)"};
  return(
    <div ref={ref} style={{opacity:v?1:0,transform:v?"none":`${t[dir]} scale(0.95)`,transition:`opacity .75s cubic-bezier(.34,1.56,.64,1) ${delay}ms, transform .75s cubic-bezier(.34,1.56,.64,1) ${delay}ms`,...style}}>{children}</div>
  );
}

function Navbar({active,go}){
  const [scrolled,ss]=useState(false);
  useEffect(()=>{const h=()=>ss(window.scrollY>50);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h);},[]);
  return(
    <nav style={{background:scrolled?"rgba(5,8,16,0.92)":"transparent",backdropFilter:scrolled?"blur(20px)":"none",borderBottom:scrolled?"1px solid rgba(16,185,129,0.12)":"none",transition:"all .4s ease",position:"fixed",top:0,left:0,right:0,zIndex:100,padding:scrolled?"14px 0":"22px 0"}}>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"0 28px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <button onClick={()=>go("Home")} style={{fontFamily:"'Clash Display',sans-serif",fontSize:22,fontWeight:800,color:"#fff",background:"none",border:"none",cursor:"pointer",letterSpacing:"-0.5px"}}>
          <span style={{color:"#10b981"}}>H</span>emanth<span style={{color:"#f59e0b"}}>.</span>
        </button>
        <div style={{display:"flex",gap:4}}>
          {NAV.map(n=>(
            <button key={n} onClick={()=>go(n)} style={{background:active===n?"rgba(16,185,129,0.15)":"transparent",border:active===n?"1px solid rgba(16,185,129,0.35)":"1px solid transparent",color:active===n?"#10b981":"rgba(255,255,255,0.55)",padding:"8px 18px",borderRadius:99,fontSize:13,fontWeight:600,cursor:"pointer",transition:"all .25s ease",fontFamily:"'DM Sans',sans-serif"}}
            onMouseEnter={e=>{if(active!==n){e.target.style.color="#fff";e.target.style.background="rgba(255,255,255,0.05)";}}}
            onMouseLeave={e=>{if(active!==n){e.target.style.color="rgba(255,255,255,0.55)";e.target.style.background="transparent";}}}>{n}</button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Home({go}){
  const [m,sm]=useState(false);
  useEffect(()=>{setTimeout(()=>sm(true),80);},[]);
  const anim=(d=0)=>({opacity:m?1:0,transform:m?"none":"translateY(40px)",transition:`all .8s cubic-bezier(.34,1.56,.64,1) ${d}ms`});
  return(
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",paddingTop:80}}>
      <div style={{position:"absolute",inset:0,pointerEvents:"none"}}>
        <div style={{position:"absolute",top:"15%",left:"5%",width:560,height:560,background:"radial-gradient(circle,rgba(16,185,129,0.2) 0%,transparent 68%)",borderRadius:"50%"}}/>
        <div style={{position:"absolute",bottom:"10%",right:"5%",width:460,height:460,background:"radial-gradient(circle,rgba(245,158,11,0.16) 0%,transparent 68%)",borderRadius:"50%"}}/>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:800,height:800,background:"radial-gradient(circle,rgba(16,185,129,0.06) 0%,transparent 60%)",borderRadius:"50%"}}/>
        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(16,185,129,0.2) 1px,transparent 1px)",backgroundSize:"38px 38px",opacity:.45}}/>
      </div>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"40px 28px",display:"grid",gridTemplateColumns:"1fr auto",gap:60,alignItems:"center",position:"relative",zIndex:1,width:"100%"}}>
        <div>
          <div style={anim(0)}>
            <span style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(16,185,129,0.12)",border:"1px solid rgba(16,185,129,0.35)",color:"#10b981",fontSize:11,fontWeight:700,padding:"7px 16px",borderRadius:99,letterSpacing:2,textTransform:"uppercase",marginBottom:28,fontFamily:"'DM Sans',sans-serif"}}>
              <span style={{width:7,height:7,background:"#10b981",borderRadius:"50%",boxShadow:"0 0 10px #10b981",animation:"pulse 2s infinite"}}/>
              Open to opportunities
            </span>
          </div>
          <div style={anim(150)}>
            <h1 style={{fontFamily:"'Clash Display',sans-serif",fontSize:"clamp(50px,6.5vw,84px)",fontWeight:800,color:"#fff",lineHeight:1.0,margin:"0 0 8px",letterSpacing:"-2.5px"}}>
              Hemanth<br/>
              <span style={{background:"linear-gradient(135deg,#10b981 0%,#f59e0b 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Kumar HN</span>
            </h1>
          </div>
          <div style={anim(280)}>
            <p style={{color:"rgba(255,255,255,0.55)",fontSize:17,lineHeight:1.8,maxWidth:460,margin:"22px 0 38px",fontFamily:"'DM Sans',sans-serif"}}>
              Java Full Stack Developer · ML Researcher · Building robust web apps with <span style={{color:"#10b981",fontWeight:700}}>Spring Boot</span> &amp; <span style={{color:"#f59e0b",fontWeight:700}}>React</span>.
            </p>
          </div>
          <div style={{...anim(400),display:"flex",gap:14,flexWrap:"wrap"}}>
            <button onClick={()=>go("Projects")} style={{background:"linear-gradient(135deg,#10b981,#059669)",padding:"14px 34px",borderRadius:99,border:"none",color:"#fff",fontSize:14,fontWeight:700,cursor:"pointer",boxShadow:"0 0 32px rgba(16,185,129,0.45), 0 4px 20px rgba(16,185,129,0.3)",letterSpacing:.3,fontFamily:"'DM Sans',sans-serif",transition:"all .3s ease"}}
            onMouseEnter={e=>{e.target.style.transform="scale(1.06)";e.target.style.boxShadow="0 0 55px rgba(16,185,129,0.65), 0 6px 30px rgba(16,185,129,0.45)";}}
            onMouseLeave={e=>{e.target.style.transform="scale(1)";e.target.style.boxShadow="0 0 32px rgba(16,185,129,0.45), 0 4px 20px rgba(16,185,129,0.3)";}}>
              View Projects ↗
            </button>
            <button onClick={()=>go("Contact")} style={{background:"transparent",padding:"14px 34px",borderRadius:99,border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.8)",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",transition:"all .3s ease"}}
            onMouseEnter={e=>{e.target.style.borderColor="rgba(245,158,11,0.55)";e.target.style.color="#f59e0b";e.target.style.background="rgba(245,158,11,0.08)";e.target.style.transform="scale(1.04)";}}
            onMouseLeave={e=>{e.target.style.borderColor="rgba(255,255,255,0.2)";e.target.style.color="rgba(255,255,255,0.8)";e.target.style.background="transparent";e.target.style.transform="scale(1)";}}>
              Get in Touch
            </button>
          </div>
          <div style={{...anim(540),display:"flex",gap:36,marginTop:50}}>
            {[["2+","Projects","#10b981"],["1","Publication","#f59e0b"],["2","Internships","#a855f7"]].map(([n,l,c])=>(
              <div key={l}>
                <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:40,fontWeight:800,color:c,lineHeight:1,textShadow:`0 0 24px ${c}88`}}>{n}</div>
                <div style={{color:"rgba(255,255,255,0.35)",fontSize:11,fontWeight:700,marginTop:4,letterSpacing:1.5,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif"}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Card */}
        <div style={{...anim(320),flexShrink:0}} className="hero-hide">
          <div style={{position:"relative"}}>
            <div style={{position:"absolute",inset:-2,borderRadius:34,background:"linear-gradient(135deg,#10b981,#f59e0b,#a855f7)",zIndex:0,opacity:.7,filter:"blur(1px)"}}/>
            <div style={{position:"relative",zIndex:1,background:"linear-gradient(145deg,#0d1522,#111827)",borderRadius:32,padding:32,width:290,border:"1px solid rgba(255,255,255,0.05)"}}>
              <div style={{width:92,height:92,margin:"0 auto 22px",borderRadius:22,background:"linear-gradient(135deg,#10b981,#059669)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,fontWeight:900,color:"#fff",fontFamily:"'Clash Display',sans-serif",boxShadow:"0 0 50px rgba(16,185,129,0.5)"}}>HK</div>
              <div style={{textAlign:"center",marginBottom:22}}>
                <div style={{color:"#fff",fontWeight:800,fontSize:17,fontFamily:"'Clash Display',sans-serif",letterSpacing:"-0.3px"}}>Hemanth Kumar HN</div>
                <div style={{color:"#10b981",fontSize:12,fontWeight:600,marginTop:5,fontFamily:"'DM Sans',sans-serif"}}>Java Full Stack Dev</div>
                <div style={{color:"rgba(255,255,255,0.3)",fontSize:11,marginTop:3,fontFamily:"'DM Sans',sans-serif"}}>📍 Bengaluru, India</div>
              </div>
              <div style={{borderTop:"1px solid rgba(255,255,255,0.07)",paddingTop:18,display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                {[["☕","Java","#10b981"],["⚛️","React","#3b82f6"],["🍃","Spring","#10b981"],["🗄️","MySQL","#f59e0b"]].map(([ic,nm,c])=>(
                  <div key={nm} style={{display:"flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.05)",borderRadius:12,padding:"9px 11px",border:`1px solid ${c}20`}}>
                    <span style={{fontSize:15}}>{ic}</span><span style={{color:"rgba(255,255,255,0.75)",fontSize:12,fontWeight:600,fontFamily:"'DM Sans',sans-serif"}}>{nm}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{position:"absolute",top:-18,right:-18,background:"linear-gradient(135deg,#10b981,#059669)",color:"#fff",fontSize:11,fontWeight:700,padding:"8px 14px",borderRadius:99,boxShadow:"0 0 25px rgba(16,185,129,0.6)",fontFamily:"'DM Sans',sans-serif",animation:"float 3s ease-in-out infinite",whiteSpace:"nowrap"}}>🎓 B.E. Student</div>
            <div style={{position:"absolute",bottom:-16,left:-18,background:"rgba(168,85,247,0.2)",border:"1px solid rgba(168,85,247,0.5)",color:"#c084fc",fontSize:11,fontWeight:700,padding:"8px 14px",borderRadius:99,boxShadow:"0 0 20px rgba(168,85,247,0.4)",fontFamily:"'DM Sans',sans-serif",animation:"float 4s ease-in-out infinite 1.5s",whiteSpace:"nowrap"}}>📄 Published</div>
          </div>
        </div>
      </div>
      <div style={{position:"absolute",bottom:32,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:8,opacity:m?.6:0,transition:"opacity 1s ease 1.6s"}}>
        <div style={{color:"rgba(255,255,255,0.25)",fontSize:10,letterSpacing:3,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif"}}>Scroll</div>
        <div style={{width:20,height:32,border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,display:"flex",paddingTop:6,justifyContent:"center"}}>
          <div style={{width:3,height:6,background:"#10b981",borderRadius:3,animation:"scrolldot 1.6s ease-in-out infinite",boxShadow:"0 0 8px #10b981"}}/>
        </div>
      </div>
    </div>
  );
}

function About(){
  return(
    <div style={{minHeight:"100vh",padding:"120px 28px 80px"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <Anim>
          <div style={{textAlign:"center",marginBottom:64}}>
            <div style={{color:"#10b981",fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase",marginBottom:12,fontFamily:"'DM Sans',sans-serif"}}>Who I Am</div>
            <h2 style={{fontFamily:"'Clash Display',sans-serif",fontSize:"clamp(36px,5vw,58px)",fontWeight:800,color:"#fff",margin:0,letterSpacing:"-1.5px"}}>
              About <span style={{background:"linear-gradient(135deg,#10b981,#f59e0b)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Me</span>
            </h2>
          </div>
        </Anim>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40}} className="two-col">
          <Anim dir="left">
            <div style={{background:"linear-gradient(145deg,rgba(16,185,129,0.1),rgba(5,150,105,0.04))",border:"1px solid rgba(16,185,129,0.25)",borderRadius:24,padding:36,height:"100%",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:-40,right:-40,width:160,height:160,background:"radial-gradient(circle,rgba(16,185,129,0.15),transparent)",borderRadius:"50%"}}/>
              <div style={{width:80,height:80,background:"linear-gradient(135deg,#10b981,#059669)",borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,fontWeight:900,color:"#fff",marginBottom:24,boxShadow:"0 0 35px rgba(16,185,129,0.4)",fontFamily:"'Clash Display',sans-serif"}}>HK</div>
              <h3 style={{fontFamily:"'Clash Display',sans-serif",color:"#fff",fontSize:22,fontWeight:800,margin:"0 0 4px"}}>Hemanth Kumar HN</h3>
              <p style={{color:"#10b981",fontSize:13,fontWeight:600,margin:"0 0 20px",fontFamily:"'DM Sans',sans-serif"}}>Java Full Stack Developer · ML Researcher</p>
              <p style={{color:"rgba(255,255,255,0.5)",lineHeight:1.8,margin:"0 0 24px",fontFamily:"'DM Sans',sans-serif",fontSize:14}}>Pursuing B.E. at Sahyadri College, Mangalore. I build end-to-end web applications and explore ML research in healthcare — bridging robust backends with intuitive frontends.</p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                {[["📍","Bengaluru, India"],["🎓","B.E. Engineering"],["💡","Full Stack Dev"],["🧬","ML Research"]].map(([ic,tx])=>(
                  <div key={tx} style={{display:"flex",alignItems:"center",gap:8,color:"rgba(255,255,255,0.5)",fontSize:13,fontFamily:"'DM Sans',sans-serif"}}><span>{ic}</span><span>{tx}</span></div>
                ))}
              </div>
            </div>
          </Anim>
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            {[
              {label:"🎓 EDUCATION",c:"#f59e0b",content:(
                <div style={{display:"flex",flexDirection:"column",gap:12}}>
                  {[["B.E. in Engineering","Sahyadri College of Engineering, Mangalore","Nov 2022 – Present","#10b981"],["Pre University Course","MASVS Gurukula PU College, Mysore","Jun 2020 – Apr 2022","rgba(255,255,255,0.2)"]].map(([t,i,p,c])=>(
                    <div key={t} style={{borderLeft:`2px solid ${c}`,paddingLeft:14}}>
                      <div style={{color:"#fff",fontWeight:700,fontSize:14,fontFamily:"'DM Sans',sans-serif"}}>{t}</div>
                      <div style={{color:"rgba(255,255,255,0.4)",fontSize:12,marginTop:2,fontFamily:"'DM Sans',sans-serif"}}>{i}</div>
                      <div style={{color:"rgba(255,255,255,0.25)",fontSize:11,marginTop:2,fontFamily:"'DM Sans',sans-serif"}}>{p}</div>
                    </div>
                  ))}
                </div>
              ),delay:100},
              {label:"🌐 LANGUAGES",c:"#3b82f6",content:(
                [["Kannada","Native",100,"#10b981"],["English","Professional",85,"#f59e0b"],["Hindi","Professional",80,"#3b82f6"]].map(([l,lv,p,c])=>(
                  <div key={l} style={{marginBottom:12}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{color:"rgba(255,255,255,0.7)",fontSize:13,fontWeight:600,fontFamily:"'DM Sans',sans-serif"}}>{l}</span><span style={{color:c,fontSize:12,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>{lv}</span></div>
                    <div style={{height:5,background:"rgba(255,255,255,0.07)",borderRadius:99,overflow:"hidden"}}><div style={{height:"100%",width:`${p}%`,background:`linear-gradient(90deg,${c},${c}88)`,borderRadius:99,boxShadow:`0 0 8px ${c}66`}}/></div>
                  </div>
                ))
              ),delay:180},
              {label:"💫 SOFT SKILLS",c:"#a855f7",content:(
                <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                  {["Teamwork","Leadership","Time Management","Problem Solving"].map(s=>(
                    <span key={s} style={{background:"rgba(16,185,129,0.12)",border:"1px solid rgba(16,185,129,0.28)",color:"#10b981",fontSize:12,fontWeight:600,padding:"6px 14px",borderRadius:99,fontFamily:"'DM Sans',sans-serif"}}>{s}</span>
                  ))}
                </div>
              ),delay:260},
            ].map(({label,c,content,delay})=>(
              <Anim key={label} delay={delay}>
                <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:20,padding:24}}>
                  <h4 style={{color:c,fontSize:12,fontWeight:700,margin:"0 0 16px",fontFamily:"'DM Sans',sans-serif",letterSpacing:1.5,textTransform:"uppercase"}}>{label}</h4>
                  {content}
                </div>
              </Anim>
            ))}
          </div>
        </div>
        <Anim delay={100} style={{marginTop:60}}>
          <div style={{textAlign:"center",margin:"60px 0 32px"}}><h3 style={{fontFamily:"'Clash Display',sans-serif",fontSize:"clamp(28px,4vw,40px)",fontWeight:800,color:"#fff",letterSpacing:"-1px"}}>Experience <span style={{background:"linear-gradient(135deg,#10b981,#f59e0b)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Timeline</span></h3></div>
        </Anim>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}} className="two-col">
          {EXP.map((e,i)=>(
            <Anim key={e.company} delay={i*120} dir={i%2===0?"left":"right"}>
              <div style={{background:`linear-gradient(145deg,${e.color}0d,${e.color}05)`,border:`1px solid ${e.color}30`,borderRadius:24,padding:28,position:"relative",overflow:"hidden",height:"100%"}}>
                <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${e.color},transparent)`}}/>
                <div style={{display:"flex",gap:16,marginBottom:14}}>
                  <div style={{width:48,height:48,background:`${e.color}20`,border:`1px solid ${e.color}40`,borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{e.icon}</div>
                  <div>
                    <div style={{color:"#fff",fontWeight:800,fontSize:15,fontFamily:"'Clash Display',sans-serif"}}>{e.role}</div>
                    <div style={{color:e.color,fontSize:12,fontWeight:600,marginTop:2,fontFamily:"'DM Sans',sans-serif"}}>{e.company}</div>
                    <div style={{color:"rgba(255,255,255,0.3)",fontSize:11,marginTop:2,fontFamily:"'DM Sans',sans-serif"}}>{e.period} · {e.loc}</div>
                  </div>
                </div>
                <p style={{color:"rgba(255,255,255,0.5)",fontSize:13,lineHeight:1.7,margin:0,fontFamily:"'DM Sans',sans-serif"}}>{e.desc}</p>
              </div>
            </Anim>
          ))}
        </div>
      </div>
    </div>
  );
}

function Skills(){
  return(
    <div style={{minHeight:"100vh",padding:"120px 28px 80px"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <Anim>
          <div style={{textAlign:"center",marginBottom:64}}>
            <div style={{color:"#10b981",fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase",marginBottom:12,fontFamily:"'DM Sans',sans-serif"}}>What I Know</div>
            <h2 style={{fontFamily:"'Clash Display',sans-serif",fontSize:"clamp(36px,5vw,58px)",fontWeight:800,color:"#fff",margin:0,letterSpacing:"-1.5px"}}>My <span style={{background:"linear-gradient(135deg,#10b981,#f59e0b)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Skills</span></h2>
          </div>
        </Anim>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}} className="two-col">
          {Object.entries(SKILLS_DATA).map(([cat,{icon,color,items}],ci)=>(
            <Anim key={cat} delay={ci*100} dir={ci%2===0?"left":"right"}>
              <div style={{background:`linear-gradient(145deg,${color}0d,${color}05)`,border:`1px solid ${color}30`,borderRadius:24,padding:28,height:"100%",position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",top:-30,right:-30,width:110,height:110,background:`radial-gradient(circle,${color}18,transparent)`,borderRadius:"50%"}}/>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
                  <span style={{fontSize:24}}>{icon}</span>
                  <h3 style={{fontFamily:"'Clash Display',sans-serif",color:"#fff",fontSize:17,fontWeight:800,margin:0}}>{cat}</h3>
                </div>
                <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                  {items.map(sk=>(
                    <div key={sk} style={{display:"flex",alignItems:"center",gap:7,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)",padding:"8px 14px",borderRadius:12,cursor:"default",transition:"all .25s ease",fontFamily:"'DM Sans',sans-serif"}}
                      onMouseEnter={e=>{e.currentTarget.style.background=`${color}1c`;e.currentTarget.style.borderColor=`${color}55`;e.currentTarget.style.transform="scale(1.06)translateY(-2px)";}}
                      onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.05)";e.currentTarget.style.borderColor="rgba(255,255,255,0.08)";e.currentTarget.style.transform="none";}}>
                      <span style={{fontSize:14}}>{EM[sk]||"🔧"}</span><span style={{color:"rgba(255,255,255,0.8)",fontSize:12,fontWeight:600}}>{sk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Anim>
          ))}
        </div>
        <Anim delay={200} style={{marginTop:40}}>
          <div style={{marginTop:40,background:"linear-gradient(145deg,rgba(245,158,11,0.08),rgba(16,185,129,0.05))",border:"1px solid rgba(245,158,11,0.22)",borderRadius:24,padding:36}}>
            <h3 style={{fontFamily:"'Clash Display',sans-serif",color:"#fff",fontSize:22,fontWeight:800,margin:"0 0 28px",letterSpacing:"-0.5px"}}>Core Proficiencies</h3>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"18px 52px"}} className="two-col">
              {[["Java",92,"#10b981"],["Spring Boot",84,"#10b981"],["React.js",78,"#3b82f6"],["SQL",86,"#f59e0b"],["Python / ML",74,"#a855f7"],["HTML/CSS/JS",90,"#f59e0b"]].map(([s,p,c])=>(
                <div key={s}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                    <span style={{color:"rgba(255,255,255,0.8)",fontSize:13,fontWeight:600,fontFamily:"'DM Sans',sans-serif"}}>{s}</span>
                    <span style={{color:c,fontSize:13,fontWeight:800,fontFamily:"'Clash Display',sans-serif",textShadow:`0 0 10px ${c}88`}}>{p}%</span>
                  </div>
                  <div style={{height:6,background:"rgba(255,255,255,0.06)",borderRadius:99,overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${p}%`,background:`linear-gradient(90deg,${c},${c}aa)`,borderRadius:99,boxShadow:`0 0 10px ${c}77`}}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Anim>
      </div>
    </div>
  );
}

function Projects(){
  return(
    <div style={{minHeight:"100vh",padding:"120px 28px 80px"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <Anim>
          <div style={{textAlign:"center",marginBottom:64}}>
            <div style={{color:"#10b981",fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase",marginBottom:12,fontFamily:"'DM Sans',sans-serif"}}>What I've Built</div>
            <h2 style={{fontFamily:"'Clash Display',sans-serif",fontSize:"clamp(36px,5vw,58px)",fontWeight:800,color:"#fff",margin:0,letterSpacing:"-1.5px"}}>Featured <span style={{background:"linear-gradient(135deg,#10b981,#f59e0b)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Projects</span></h2>
          </div>
        </Anim>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:28}} className="two-col">
          {PROJECTS.map((p,i)=>(
            <Anim key={p.title} delay={i*140} dir={i%2===0?"left":"right"}>
              <div style={{background:`linear-gradient(145deg,${p.accent}10,${p.accent}05)`,border:`1px solid ${p.accent}38`,borderRadius:28,padding:36,position:"relative",overflow:"hidden",transition:"all .4s cubic-bezier(.34,1.56,.64,1)",height:"100%"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow=`0 24px 60px ${p.glow}`;e.currentTarget.style.borderColor=`${p.accent}60`;}}
                onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor=`${p.accent}38`;}}>
                <div style={{position:"absolute",top:-50,right:-50,width:180,height:180,background:`radial-gradient(circle,${p.accent}22,transparent)`,borderRadius:"50%"}}/>
                <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${p.accent},transparent)`}}/>
                <div style={{position:"relative",zIndex:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20}}>
                    <span style={{fontSize:48}}>{p.emoji}</span>
                    <span style={{background:`${p.accent}22`,border:`1px solid ${p.accent}45`,color:p.accent,fontSize:11,fontWeight:700,padding:"6px 13px",borderRadius:99,fontFamily:"'DM Sans',sans-serif",letterSpacing:.5}}>{p.tag}</span>
                  </div>
                  <h3 style={{fontFamily:"'Clash Display',sans-serif",color:"#fff",fontSize:22,fontWeight:800,margin:"0 0 6px",letterSpacing:"-0.5px"}}>{p.title}</h3>
                  <p style={{color:p.accent,fontSize:13,fontWeight:600,margin:"0 0 16px",fontFamily:"'DM Sans',sans-serif"}}>{p.sub}</p>
                  <p style={{color:"rgba(255,255,255,0.5)",fontSize:14,lineHeight:1.7,margin:"0 0 24px",fontFamily:"'DM Sans',sans-serif"}}>{p.desc}</p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
                    {p.stack.map(t=>(
                      <span key={t} style={{background:"rgba(0,0,0,0.3)",border:"1px solid rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.55)",fontSize:11,fontWeight:600,padding:"5px 11px",borderRadius:8,fontFamily:"'DM Sans',sans-serif"}}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Anim>
          ))}
        </div>
        <Anim delay={200} style={{marginTop:28}}>
          <div style={{marginTop:28,background:"linear-gradient(135deg,rgba(168,85,247,0.1),rgba(16,185,129,0.06))",border:"1px solid rgba(168,85,247,0.28)",borderRadius:28,padding:36,display:"flex",gap:24,alignItems:"flex-start",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg,#a855f7,#10b981)"}}/>
            <span style={{fontSize:48,flexShrink:0}}>🔬</span>
            <div>
              <span style={{background:"rgba(168,85,247,0.15)",border:"1px solid rgba(168,85,247,0.35)",color:"#c084fc",fontSize:11,fontWeight:700,padding:"5px 12px",borderRadius:99,fontFamily:"'DM Sans',sans-serif",letterSpacing:.5}}>Research · MIT Manipal</span>
              <h3 style={{fontFamily:"'Clash Display',sans-serif",color:"#fff",fontSize:20,fontWeight:800,margin:"12px 0 10px",letterSpacing:"-0.5px"}}>Facial Emotion Recognition for Healthcare AI</h3>
              <p style={{color:"rgba(255,255,255,0.5)",fontSize:14,lineHeight:1.7,margin:"0 0 18px",fontFamily:"'DM Sans',sans-serif"}}>Developed ML-based approaches for affective computing in healthcare, with comparative study of computer vision feature extraction techniques.</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                {["Machine Learning","Computer Vision","Affective Computing","Healthcare AI"].map(t=>(
                  <span key={t} style={{background:"rgba(168,85,247,0.1)",border:"1px solid rgba(168,85,247,0.28)",color:"#c084fc",fontSize:11,padding:"5px 12px",borderRadius:99,fontWeight:600,fontFamily:"'DM Sans',sans-serif"}}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </Anim>
      </div>
    </div>
  );
}

function Publications(){
  return(
    <div style={{minHeight:"100vh",padding:"120px 28px 80px"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <Anim>
          <div style={{textAlign:"center",marginBottom:64}}>
            <div style={{color:"#f59e0b",fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase",marginBottom:12,fontFamily:"'DM Sans',sans-serif"}}>Research Output</div>
            <h2 style={{fontFamily:"'Clash Display',sans-serif",fontSize:"clamp(36px,5vw,58px)",fontWeight:800,color:"#fff",margin:0,letterSpacing:"-1.5px"}}>Publications <span style={{background:"linear-gradient(135deg,#f59e0b,#10b981)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>&amp; Research</span></h2>
          </div>
        </Anim>
        <Anim dir="up">
          <div style={{position:"relative",background:"linear-gradient(145deg,rgba(245,158,11,0.1),rgba(16,185,129,0.05))",border:"1px solid rgba(245,158,11,0.28)",borderRadius:32,padding:"48px",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,#f59e0b,#10b981)"}}/>
            <div style={{position:"absolute",top:-60,right:-60,width:320,height:320,background:"radial-gradient(circle,rgba(245,158,11,0.1),transparent)",borderRadius:"50%"}}/>
            <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:28,position:"relative",zIndex:1,flexWrap:"wrap"}}>
              <div style={{width:56,height:56,background:"rgba(245,158,11,0.15)",border:"1px solid rgba(245,158,11,0.35)",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,flexShrink:0}}>📜</div>
              <div>
                <span style={{background:"rgba(245,158,11,0.15)",border:"1px solid rgba(245,158,11,0.38)",color:"#f59e0b",fontSize:11,fontWeight:700,padding:"5px 14px",borderRadius:99,fontFamily:"'DM Sans',sans-serif",letterSpacing:.5}}>Published · Feb 14, 2025</span>
                <p style={{color:"rgba(255,255,255,0.4)",fontSize:12,margin:"6px 0 0",fontFamily:"'DM Sans',sans-serif"}}>National Institute of Technology, Sikkim, India</p>
              </div>
            </div>
            <h3 style={{fontFamily:"'Clash Display',sans-serif",color:"#fff",fontSize:"clamp(20px,3vw,30px)",fontWeight:800,margin:"0 0 20px",lineHeight:1.3,letterSpacing:"-0.5px",position:"relative",zIndex:1}}>
              Emotion Recognition From EEG Signals Using<br/>
              <span style={{background:"linear-gradient(135deg,#f59e0b,#10b981)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>RFFT-Based Features and LSTM Networks</span>
            </h3>
            <p style={{color:"rgba(255,255,255,0.5)",lineHeight:1.8,fontSize:15,maxWidth:740,margin:"0 0 36px",fontFamily:"'DM Sans',sans-serif",position:"relative",zIndex:1}}>
              Designed and implemented an EEG-based emotion recognition system using RFFT feature extraction and LSTM networks to capture temporal dependencies in brain signals. Achieved reliable classification accuracy through effective preprocessing, feature engineering, and comprehensive model evaluation.
            </p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginBottom:32,position:"relative",zIndex:1}} className="three-col">
              {[["🧠","LSTM Networks","Temporal dependency modeling","#10b981"],["📡","RFFT Features","EEG signal processing","#f59e0b"],["🎯","High Accuracy","Reliable classification","#a855f7"]].map(([ic,t,d,c])=>(
                <div key={t} style={{background:"rgba(255,255,255,0.04)",border:`1px solid ${c}28`,borderRadius:18,padding:20}}>
                  <div style={{fontSize:28,marginBottom:10}}>{ic}</div>
                  <div style={{color:c,fontWeight:700,fontSize:14,marginBottom:4,fontFamily:"'DM Sans',sans-serif",textShadow:`0 0 12px ${c}66`}}>{t}</div>
                  <div style={{color:"rgba(255,255,255,0.35)",fontSize:12,fontFamily:"'DM Sans',sans-serif"}}>{d}</div>
                </div>
              ))}
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8,position:"relative",zIndex:1}}>
              {["Deep Learning","EEG Analysis","LSTM","Signal Processing","Emotion AI","RFFT","Brain-Computer Interface"].map(t=>(
                <span key={t} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.55)",fontSize:12,padding:"6px 14px",borderRadius:99,fontWeight:600,fontFamily:"'DM Sans',sans-serif"}}>{t}</span>
              ))}
            </div>
          </div>
        </Anim>
        <Anim delay={200}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,marginTop:32}} className="three-col">
            {[["🏆","Nationally Recognized","Published at NIT Sikkim","#f59e0b"],["🔬","Healthcare AI","Real-world ML applications","#10b981"],["📈","Research Impact","Advancing affective computing","#a855f7"]].map(([ic,t,d,c])=>(
              <div key={t} style={{textAlign:"center",background:`${c}0a`,border:`1px solid ${c}22`,borderRadius:22,padding:28,transition:"all .3s ease",cursor:"default"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-5px)";e.currentTarget.style.borderColor=`${c}44`;e.currentTarget.style.boxShadow=`0 12px 30px ${c}22`;}}
                onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.borderColor=`${c}22`;e.currentTarget.style.boxShadow="none";}}>
                <div style={{fontSize:36,marginBottom:12}}>{ic}</div>
                <div style={{color:"#fff",fontWeight:800,fontSize:15,marginBottom:6,fontFamily:"'Clash Display',sans-serif"}}>{t}</div>
                <div style={{color:"rgba(255,255,255,0.4)",fontSize:13,fontFamily:"'DM Sans',sans-serif"}}>{d}</div>
              </div>
            ))}
          </div>
        </Anim>
      </div>
    </div>
  );
}

function Contact(){
  const [form,sf]=useState({name:"",email:"",message:""});
  const [sent,ss]=useState(false);
  return(
    <div style={{minHeight:"100vh",padding:"120px 28px 80px"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <Anim>
          <div style={{textAlign:"center",marginBottom:64}}>
            <div style={{color:"#10b981",fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase",marginBottom:12,fontFamily:"'DM Sans',sans-serif"}}>Let's Connect</div>
            <h2 style={{fontFamily:"'Clash Display',sans-serif",fontSize:"clamp(36px,5vw,58px)",fontWeight:800,color:"#fff",margin:0,letterSpacing:"-1.5px"}}>Get in <span style={{background:"linear-gradient(135deg,#10b981,#f59e0b)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Touch</span></h2>
            <p style={{color:"rgba(255,255,255,0.4)",marginTop:14,fontSize:15,fontFamily:"'DM Sans',sans-serif"}}>Open to opportunities, collaborations &amp; interesting tech conversations.</p>
          </div>
        </Anim>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:40,alignItems:"start"}} className="two-col">
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            {[["📧","Email","hemanthhn2004@gmail.com","mailto:hemanthhn2004@gmail.com","#10b981"],["📱","Phone","+91 9019781118","tel:+919019781118","#f59e0b"],["📍","Location","Bengaluru, Karnataka, India",null,"#3b82f6"]].map(([ic,label,val,href,c],i)=>(
              <Anim key={label} delay={i*100} dir="left">
                <div style={{display:"flex",alignItems:"center",gap:16,background:`${c}08`,border:`1px solid ${c}22`,borderRadius:18,padding:20,transition:"all .3s ease",cursor:"default"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=`${c}50`;e.currentTarget.style.background=`${c}14`;e.currentTarget.style.transform="translateX(5px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=`${c}22`;e.currentTarget.style.background=`${c}08`;e.currentTarget.style.transform="none";}}>
                  <div style={{width:46,height:46,background:`${c}1c`,border:`1px solid ${c}35`,borderRadius:13,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{ic}</div>
                  <div>
                    <div style={{color:"rgba(255,255,255,0.3)",fontSize:10,fontWeight:700,letterSpacing:2,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif"}}>{label}</div>
                    {href?<a href={href} style={{color:"#fff",fontWeight:700,fontSize:14,fontFamily:"'DM Sans',sans-serif",textDecoration:"none"}}>{val}</a>:<div style={{color:"#fff",fontWeight:700,fontSize:14,fontFamily:"'DM Sans',sans-serif"}}>{val}</div>}
                  </div>
                </div>
              </Anim>
            ))}
            <Anim delay={300} dir="left">
              <div style={{background:"linear-gradient(135deg,rgba(16,185,129,0.1),rgba(245,158,11,0.06))",border:"1px solid rgba(16,185,129,0.28)",borderRadius:18,padding:22,marginTop:4}}>
                <div style={{color:"#10b981",fontWeight:700,fontSize:14,marginBottom:8,fontFamily:"'DM Sans',sans-serif"}}>🎯 Currently Seeking</div>
                <p style={{color:"rgba(255,255,255,0.5)",fontSize:13,lineHeight:1.7,margin:0,fontFamily:"'DM Sans',sans-serif"}}>Full-stack developer roles, ML/AI research internships &amp; collaborative open-source projects.</p>
              </div>
            </Anim>
          </div>
          <Anim dir="right" delay={100}>
            {sent?(
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:400,textAlign:"center"}}>
                <div style={{fontSize:64,marginBottom:16,animation:"float 2s ease-in-out infinite"}}>🎉</div>
                <h3 style={{fontFamily:"'Clash Display',sans-serif",color:"#fff",fontSize:28,fontWeight:800,margin:"0 0 8px"}}>Message Sent!</h3>
                <p style={{color:"rgba(255,255,255,0.45)",fontFamily:"'DM Sans',sans-serif",marginBottom:24}}>Hemanth will get back to you soon.</p>
                <button onClick={()=>ss(false)} style={{color:"#10b981",background:"none",border:"1px solid rgba(16,185,129,0.3)",padding:"10px 24px",borderRadius:99,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Send another</button>
              </div>
            ):(
              <div style={{background:"linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))",border:"1px solid rgba(255,255,255,0.08)",borderRadius:28,padding:36}}>
                <h3 style={{fontFamily:"'Clash Display',sans-serif",color:"#fff",fontSize:22,fontWeight:800,margin:"0 0 24px"}}>Send a Message</h3>
                <div style={{display:"flex",flexDirection:"column",gap:16}}>
                  {[["Name","text","Your full name","name"],["Email","email","your@email.com","email"]].map(([label,type,ph,key])=>(
                    <div key={key}>
                      <label style={{color:"rgba(255,255,255,0.4)",fontSize:11,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",display:"block",marginBottom:8,fontFamily:"'DM Sans',sans-serif"}}>{label}</label>
                      <input type={type} placeholder={ph} value={form[key]} onChange={e=>sf({...form,[key]:e.target.value})}
                        style={{width:"100%",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:12,padding:"13px 16px",color:"#fff",fontSize:14,outline:"none",fontFamily:"'DM Sans',sans-serif",boxSizing:"border-box",transition:"border .25s ease"}}
                        onFocus={e=>e.target.style.borderColor="rgba(16,185,129,0.6)"}
                        onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.1)"}/>
                    </div>
                  ))}
                  <div>
                    <label style={{color:"rgba(255,255,255,0.4)",fontSize:11,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",display:"block",marginBottom:8,fontFamily:"'DM Sans',sans-serif"}}>Message</label>
                    <textarea rows={5} placeholder="Tell me about your project..." value={form.message} onChange={e=>sf({...form,message:e.target.value})}
                      style={{width:"100%",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:12,padding:"13px 16px",color:"#fff",fontSize:14,outline:"none",fontFamily:"'DM Sans',sans-serif",resize:"none",boxSizing:"border-box",transition:"border .25s ease"}}
                      onFocus={e=>e.target.style.borderColor="rgba(16,185,129,0.6)"}
                      onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.1)"}/>
                  </div>
                  <button onClick={()=>{if(form.name&&form.email&&form.message)ss(true);}} style={{background:"linear-gradient(135deg,#10b981,#059669)",color:"#fff",border:"none",borderRadius:14,padding:15,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",boxShadow:"0 0 32px rgba(16,185,129,0.4)",transition:"all .3s ease",letterSpacing:.3}}
                    onMouseEnter={e=>{e.target.style.transform="scale(1.03)";e.target.style.boxShadow="0 0 55px rgba(16,185,129,0.6)";}}
                    onMouseLeave={e=>{e.target.style.transform="scale(1)";e.target.style.boxShadow="0 0 32px rgba(16,185,129,0.4)";}}>
                    Send Message →
                  </button>
                </div>
              </div>
            )}
          </Anim>
        </div>
      </div>
    </div>
  );
}

const PAGES={Home,About,Skills,Projects,Publications,Contact};

export default function App(){
  const [active,sa]=useState("Home");
  const [fading,sf]=useState(false);
  const go=(p)=>{if(p===active)return;sf(true);setTimeout(()=>{sa(p);sf(false);window.scrollTo({top:0,behavior:"smooth"});},220);};
  const Page=PAGES[active];
  return(
    <div style={{background:"#05080f",minHeight:"100vh",color:"#fff"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700,800&display=swap');
        *{box-sizing:border-box;}
        ::selection{background:rgba(16,185,129,0.3);color:#fff;}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:#05080f;}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#10b981,#f59e0b);border-radius:99px;}
        input::placeholder,textarea::placeholder{color:rgba(255,255,255,0.2);}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
        @keyframes scrolldot{0%,100%{transform:translateY(0);opacity:1}80%{transform:translateY(10px);opacity:0}}
        @keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 10px #10b981}50%{opacity:.4;box-shadow:0 0 18px #10b981}}
        @media(max-width:700px){.two-col,.three-col{grid-template-columns:1fr!important}.hero-hide{display:none!important}}
      `}</style>
      <Navbar active={active} go={go}/>
      <div style={{opacity:fading?0:1,transform:fading?"translateY(20px) scale(0.98)":"none",transition:"all .22s cubic-bezier(.34,1.56,.64,1)"}}>
        <Page go={go}/>
      </div>
      <footer style={{borderTop:"1px solid rgba(255,255,255,0.05)",padding:"32px 28px",textAlign:"center"}}>
        <p style={{color:"rgba(255,255,255,0.22)",fontSize:13,fontFamily:"'DM Sans',sans-serif"}}>
          Crafted with ☕ by <span style={{color:"#10b981",fontWeight:700}}>Hemanth Kumar HN</span>
          <span style={{color:"rgba(255,255,255,0.12)",margin:"0 10px"}}>·</span>Java Full Stack Developer
        </p>
        <div style={{display:"flex",justifyContent:"center",gap:16,marginTop:14,flexWrap:"wrap"}}>
          {NAV.map(n=>(
            <button key={n} onClick={()=>go(n)} style={{color:"rgba(255,255,255,0.2)",background:"none",border:"none",fontSize:12,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",transition:"color .2s"}}
              onMouseEnter={e=>e.target.style.color="#10b981"}onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.2)"}>{n}</button>
          ))}
        </div>
      </footer>
    </div>
  );
}
