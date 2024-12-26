import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AJAXRequestAlertTitle, MovieMode } from "@/Constant";
import { AJAXRequestAlertSubTitle } from "@/Data/BonusUi/SweetAlert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const AJAXRequestAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      text: 'Search for a movie. e.g. "Harry Potter".',
      input: "text",
      confirmButtonText: "Search!",
      confirmButtonColor: "var(--theme-default)",
      allowOutsideClick: true
    }).then((name) => {
      if (!name || !name.value?.trim()) {
        return;
      }
      return fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(name.value)}&entity=movie`)
        .then((response) => response.json())
        .then((json) => {
          const movie = json?.results?.[0];
          if (!movie) {
            return Swal.fire({
              text: "No movie was found!",
              confirmButtonColor: "var(--theme-default)",
            });
          }
          const name = movie.trackName;
          const imageURL = movie.artworkUrl100;
          return Swal.fire({
            imageUrl: imageURL,
            title: "Top result:",
            text: name,
            confirmButtonColor: "var(--theme-default)",
          });
        })
        .catch(() => {
          return Swal.fire("Oh noes!", "The AJAX request failed!", "error");
        });
    });
  };

  return (
    <Col xxl={3} xl={4} sm={6} xs={12} className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={AJAXRequestAlertTitle} span={AJAXRequestAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button className="m-0" onClick={handleAlert}>
            {MovieMode}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AJAXRequestAlert;

