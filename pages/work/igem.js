import Layout from "components/layout";
import Link from "next/link";
import Image from "components/image";
import { Masonry } from "masonic";

export default () => {
  const photos = [
    "hyped/hyped-group-photo.jpeg",
    "hyped/software-team.jpg",
    "hyped/hyped-elon-musk.jpg",
    "hyped/isabella-ragnor-working.jpg",
    "hyped/spacex-tube-interior.jpg",
    "hyped/spacex-falcon.jpg",
    "hyped/spacex-tube.jpg",
  ];

  return (
    <Layout>
      <div className=" flex flex-col px-18 lg:px-24 w-full leading-relaxed">
        <div className="flex mb-20">
          <img
            style={{ boxShadow: "0px 0px 45px 10px rgba(45, 56, 104, 0.5" }}
            src="/img/illustrations/igemcompetition.png"
            className="rounded-lg w-1/4 mr-20 mb-4 hidden md:block xl:block xxl:block"
          ></img>

          <div>
            <h1 className="text-5xl font-bold mb-8">Finding Nemo </h1>
            <p>
              <strong>Status:</strong> Finished
            </p>
            
            <p>
              <strong>Collaborators:</strong> Matteo Cese, 	Alexandru Popov, Ziyuan Xie, Samy zebda, Ying Yang, Jingyao Zhou, Bingyu Zhou, Ziyue Luo, Nan Ya, Zichen Feng, Yihan Liu, William Gouskov		
            </p>
            <p>
              <strong>Location:</strong> Edinburgh, UK
            </p>
            <p>
              <strong>Website: </strong> <a href="https://2020.igem.org/Team:Edinburgh"> igemedinburgh.org </a>
           
            </p>
         
          </div>
        </div>
        <h4 class="my-3">Minimal biosensing – For the environment </h4>
                        <p class="text-muted">As with any product intended for in field application, a responsible design must be considerate of the environment its used in. From its inception, our minimal system has been designed to leave equally minimal trace on its surrounding environment. We understood that a crucial factor for most in-situ commercial biosensors is disposability. Test samples, any materials and any produced chemicals must be non-toxic and preferably completely biodegradable. Our cell- free design facilitates a minimal mixture to be adhered to small disks of filter paper which are completely biodegradable. And reducing the system to transcription only removes the risk of producing toxic proteins. </p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i ></i>
                        </span>
                        <h4 class="my-3">Minimal biosensing – Boosting performance</h4>
                        <p class="text-muted">An adequate biosensor is accurate. A more useful biosensor is fast and, even better, multicompetent. It Is well known that the major limiting factor to output (protein) production is ribosomal translation. Our minimal design produces output before this constraint at the level of transcription – producing a readable fluorescence output in less than 5 minutes! By designing individual sensing components upstream of multiple distinct fluorescent aptamers we are even able to incorporate more than one sensing target into any solution. </p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i ></i>
                        </span>
                        <h4 class="my-3">Minimal biosensing – A processor in itself</h4>
                        <p class="text-muted">Biomolecular logic is a burgeoning field of science, and has begun to make its way into the field of biosensing and diagnostics. One unique element of our project is the development of a novel, nucleotide based biomolecular logic system mediated by T7RNAP. Through this mechanism, the biosensor is able to process a predetermined interpretation of multiple sensing targets to give a single meaningful result – without the need for complex analysis or skilful interpretation. By integrating “hard-wired” processing we aim to democratise the technology so that even non-specialists can use it. And by integrating biomolecular logic, we avoid being truly “hard-wired” or encumbered by the additional cost increment, or infringement on disposability of actual electronic hardware. </p>
                    </div>
 <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i ></i>
                        </span>
                        <h4 class="my-3">Minimal biosensing – For everyone</h4>
                        <p class="text-muted">For our system to be the success we envision, we need to ensure that the science is open and accessible to all. Straightforward and reproducible construction enable any prospective researchers to quickly and easily get involved. Our minimal design makes this easier than ever, all our base components can be acquired commercially in a matter of days and for minimal cost. After that construction itself is as simple as pipetting into a test tube! </p>
                    </div>

<div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i ></i>
                        </span>
                        <h4 class="my-3">Minimal biosensing – Economically viable </h4>
                        <p class="text-muted">Any good product must also be economical. By operating in cell-free and transcription only we minimise the need for excessive investment for construction of each sensor. Cell-free solutions are made cheaply through cell culture and can be freeze dried on substrates as simple as filter paper. Protein components can be grown recombinantly on mass scale and nucleotide components can be replicated indefinitely by processes such as PCR -  both for little to no cost.  

</p>
                    </div>

<div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i ></i>
                        </span>
                        <h4 class="my-3">Minimal biosensing – A safer platform</h4>
                        <p class="text-muted">
Stripping back to the bare necessities for function also provides a safer alternative for biosensing technology. Using a cell-free platform allows the development of an in-situ biosensor without posing any risk of releasing live GM organisms into the environment. What’s more, the system comprises solely of benign proteins and inert RNA’s. And by operating in transcription only we remove the potential risk of producing any harmful or toxic protein.


</p>
       

       <iframe src="https://uoe-my.sharepoint.com/personal/s1811556_ed_ac_uk/_layouts/15/Doc.aspx?sourcedoc={e0c5eff6-bc3f-4a97-9cdb-f03464307c0a}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="1186px" height="691px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
    
     
      </div>
     
    </Layout>
  );
};

