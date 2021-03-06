from flask import Flask, render_template
from flask import request, send_file
from forms import ContactForm
from flask_mail import Message, Mail
import sass


app = Flask(__name__)
app.static_folder = 'static'
app.config['SECRET_KEY'] = '...'
sass.compile(dirname=('...', '...'))


mail = Mail(app)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = '...'
app.config['MAIL_PASSWORD'] = '...'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

@app.route('/')
def home_page():
    return render_template("index.html")


@app.route('/DES_projects')
def DES_page():
    return render_template("DES_projects.html")

@app.route('/software_projects')
def software_page():
    return render_template("software_projects.html")

@app.route('/resume')
def resume_page():
     return render_template("resume.html")

@app.route('/download_resume')
def resume_download():
    # For windows you need to use drive name [ex: F:/Example.pdf]
    path = "Robert_Saitov_Resume.pdf"
    return send_file(path, as_attachment=True)


@app.route('/contact', methods=["GET","POST"])
def get_contact():
    form = ContactForm()

    if request.method == 'POST':
        name = request.form["name"]
        email = request.form["email"]
        message = request.form["message"]
        msg = Message()
        msg.recipients = ["test@gmail.com"]
        msg.sender = (name, email)
        msg.subject = f"Portfolio generated message from {name} and email: {email}"
        msg.body = f"This message was generated by your portfolio website:\n{message}"
        mail.send(msg)
        print("The data is saved !")

        return render_template('contact.html', success=True)
    else:
        return render_template('contact.html', form=form)


if __name__ == "__main__":
    app.run(debug=True)
