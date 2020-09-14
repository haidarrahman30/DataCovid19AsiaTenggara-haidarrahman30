function main() {

    const baseUrl = "https://covid19.mathdro.id";

    const getDataIndonesia = () => {
        fetch(`${baseUrl}/api/countries/indonesia/confirmed`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderDataIndonesia(responseJson);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const getDataMalaysia = () => {
        fetch(`https://indonesia-covid-19.mathdro.id/api/provinsi`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderDataMalaysia(responseJson.data);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const getDataThailand = () => {
        fetch(`${baseUrl}/api/countries/Thailand/confirmed`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderDataThailand(responseJson);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };
    const getDataVietnam = () => {
        fetch(`${baseUrl}/api/countries/Vietnam/confirmed`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderDataVietnam(responseJson);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const getDataFilipina = () => {
        fetch(`${baseUrl}/api/countries/philippines/confirmed`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderDataFilipina(responseJson);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const renderDataIndonesia = (responseJson) => {
        const listDataElement = document.querySelector("#listData");
        listDataElement.innerHTML = "";

        responseJson.forEach(data => {
            listDataElement.innerHTML += `
                <div class="col-lg-12 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card text-center">
                        <div class="card-body">
                            <h5>${data.combinedKey} </h5>
                            <p>Data Positif : ${data.confirmed} <br> Data Sembuh : ${data.recovered} <br> Data Meninggal : ${data.deaths}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    };

    const renderDataMalaysia = (datas) => {
        const listDataElement = document.querySelector("#listData1");
        listDataElement.innerHTML = "";

        datas.forEach(data => {
            listDataElement.innerHTML += `
                <div class="col-lg-12 col-md-12 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body text-center">
                            <h5>${data.provinsi} </h5>
                            <p>Data Positif : ${data.kasusPosi} <br> Data Sembuh : ${data.kasusSemb} <br> Data Meninggal : ${data.kasusMeni}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    };

    const renderDataThailand = (responseJson) => {
        const listDataElement = document.querySelector("#listData2");
        listDataElement.innerHTML = "";

        responseJson.forEach(data => {
            listDataElement.innerHTML += `
                <div class="col-lg-12 col-md-12 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body text-center">
                            <h5>${data.combinedKey} </h5>
                            <p>Data Positif : ${data.confirmed} <br> Data Sembuh : ${data.recovered} <br> Data Meninggal : ${data.deaths}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    };

    const renderDataVietnam = (responseJson) => {
        const listDataElement = document.querySelector("#listData3");
        listDataElement.innerHTML = "";

        responseJson.forEach(data => {
            listDataElement.innerHTML += `
                <div class="col-lg-12 col-md-12 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body text-center">
                            <h5>${data.combinedKey} </h5>
                            <p>Data Positif : ${data.confirmed} <br> Data Sembuh : ${data.recovered} <br> Data Meninggal : ${data.deaths}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    };

    const renderDataFilipina = (responseJson) => {
        const listDataElement = document.querySelector("#listData4");
        listDataElement.innerHTML = "";

        responseJson.forEach(data => {
            listDataElement.innerHTML += `
                <div class="col-lg-12 col-md-12 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body text-center">
                            <h5>${data.combinedKey} </h5>
                            <p>Data Positif : ${data.confirmed} <br> Data Sembuh : ${data.recovered} <br> Data Meninggal : ${data.deaths}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    };

    const showResponseMessage = (message = "Check Koneksi Internet Anda") => {
        alert(message);
    };



    document.addEventListener("DOMContentLoaded", () => {
        getDataIndonesia();
        getDataMalaysia();
        getDataThailand();
        getDataVietnam();
        getDataFilipina();

    });
}

export default main;