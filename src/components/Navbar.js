import Link from "next/link";

export default function Navbar(){
return(
<nav style={{padding:"20px 40px",display:"flex",justifyContent:"space-between"}}>
<h2>Beautify</h2>

<div style={{display:"flex",gap:"20px"}}>
<Link href="/">Home</Link>
<Link href="/collection">Collection</Link>
</div>

</nav>
)
}